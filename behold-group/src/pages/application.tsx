import DefaultLayout from "@/layouts/default";
import AppForm from "@/components/Contact/app-form";
import React from "react";

import { FormErrors } from "@/types/form";

const Apply: React.FC = () => {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Use FormErrors from form.ts
    const [errors, setErrors] = React.useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const validateForm = (): boolean => {
      const newErrors: FormErrors = {};

      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }

      if (!formData.subject) {
        newErrors.subject = "Please select a subject";
      }

      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear the error for the current field if it exists
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    };

    const handleSelectChange = (value: string) => {
      setFormData((prev) => ({
        ...prev,
        subject: value,
      }));

      // Clear the subject error if it exists
      if (errors.subject) {
        setErrors((prev) => ({
          ...prev,
          subject: undefined,
        }));
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    };

    const subjects = [
      { value: "digital-transformation", label: "Digital Transformation" },
      { value: "exit-planning", label: "Exit Planning" },
      { value: "business-consulting", label: "Business Consulting" },
      { value: "partnership", label: "Partnership Opportunities" },
      { value: "other", label: "Other" },
    ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">

            <AppForm
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              subjects={subjects}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Apply;
