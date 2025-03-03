import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Button, Input, Textarea } from '@heroui/react';
import { useApp } from '@/components/context/AppContext';

interface ProfileData {
  username: string;
  email: string;
  bio: string;
  profileImageUrl: string;
}

export const ProfilePage: React.FC = () => {
  const { user } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [profileData, setProfileData] = useState<ProfileData>({
    username: user?.username || '',
    email: user?.email || '',
    bio: '',
    profileImageUrl: '',
  });

  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch profile data when component mounts
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/profile', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }

      const data = await response.json();
      setProfileData({
        username: data.username,
        email: data.email,
        bio: data.bio || '',
        profileImageUrl: data.profile_image_url || '',
      });

      if (data.profile_image_url) {
        setPreviewUrl(data.profile_image_url);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to load profile data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);

      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Create FormData to handle file upload
      const formData = new FormData();
      formData.append('username', profileData.username);
      formData.append('bio', profileData.bio);

      if (image) {
        formData.append('profile_image', image);
      }

      const response = await fetch('http://127.0.0.1:8000/api/users/profile', {
        method: 'PUT',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.message || 'Failed to update profile');
      }

      setSuccess('Profile updated successfully!');
      setIsEditing(false);

      // Refetch profile data to get updated image URL from server
      fetchProfileData();
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error instanceof Error ? error.message : 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <Card className="w-full">
        <CardHeader className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Profile</h1>
          {!isEditing && (
            <Button color="primary" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
        </CardHeader>
        <CardBody>
          {isLoading && <p>Loading profile data...</p>}

          {error && (
            <div className="p-3 mb-4 rounded-lg bg-danger-50 text-danger text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 mb-4 rounded-lg bg-success-50 text-success text-sm">
              {success}
            </div>
          )}

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col items-center">
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Profile preview"
                        className="w-40 h-40 object-cover rounded-full mb-4"
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                        <span className="text-gray-500 text-xl">No Image</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="text-sm"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <Input
                      fullWidth
                      label="Username"
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your username"
                    />
                  </div>

                  <div>
                    <Input
                      fullWidth
                      label="Email"
                      value={profileData.email}
                      disabled
                      placeholder="Your email address"
                    />
                    <small className="text-gray-500">Email cannot be changed</small>
                  </div>

                  <div>
                    <Textarea
                      fullWidth
                      label="Bio"
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  color="default"
                  onClick={() => {
                    setIsEditing(false);
                    setError(null);
                    setPreviewUrl(profileData.profileImageUrl || null);
                    setImage(null);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="flex flex-col items-center">
                  {profileData.profileImageUrl ? (
                    <img
                      src={profileData.profileImageUrl}
                      alt={`${profileData.username}'s profile`}
                      className="w-40 h-40 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xl">No Image</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">{profileData.username}</h2>
                <p className="text-gray-600 mb-4">{profileData.email}</p>

                <h3 className="text-lg font-medium mb-2">About Me</h3>
                {profileData.bio ? (
                  <p className="text-gray-700 whitespace-pre-line">{profileData.bio}</p>
                ) : (
                  <p className="text-gray-500 italic">No bio provided yet.</p>
                )}
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
