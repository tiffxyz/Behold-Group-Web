// import { title } from "@/components/primitives";
// import DefaultLayout from "@/layouts/default";

// export default function DocsPage() {
//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="inline-block max-w-lg text-center justify-center">
//           <h1 className={title()}>Blog</h1>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// }
import React from 'react';
import { Card, CardBody, CardHeader, Button, Image, Avatar } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  coverImage: string;
  publishDate: string;
  readTime: string;
  category: string;
  slug: string;
  author: Author;
}

interface BlogCardProps extends BlogPost {
  onClick?: (slug: string) => void;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogCard: React.FC<BlogCardProps> = ({
  title: postTitle,
  excerpt,
  coverImage,
  publishDate,
  readTime,
  category,
  slug,
  author,
  onClick
}) => (
  <Card className="w-full">
    <CardHeader className="p-0">
      <Image
        alt={postTitle}
        className="object-cover w-full h-48"
        src={coverImage}
      />
    </CardHeader>
    <CardBody className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-primary">{category}</span>
        <span className="text-sm text-default-500">{readTime}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{postTitle}</h3>
      <p className="text-default-500 mb-2">{excerpt}</p>
      <p className="text-xs text-default-400 mb-4">{formatDate(publishDate)}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar src={author.avatar} size="sm" />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-default-500">{author.role}</p>
          </div>
        </div>
        <Button
          color="primary"
          variant="light"
          size="sm"
          onClick={() => onClick?.(slug)}
        >
          Read More
        </Button>
      </div>
    </CardBody>
  </Card>
);

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Digital Transformation",
      excerpt: "Discover how emerging technologies are reshaping business operations...",
      coverImage: "/api/placeholder/800/400",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      category: "Digital Transformation",
      slug: "future-of-digital-transformation",
      author: {
        name: "John Smith",
        role: "Digital Strategy Lead",
        avatar: "/api/placeholder/100/100"
      }
    },
    {
      title: "Exit Planning Strategies for 2024",
      excerpt: "Key considerations for business owners planning their exit strategy...",
      coverImage: "/api/placeholder/800/400",
      publishDate: "2024-01-10",
      readTime: "7 min read",
      category: "Exit Planning",
      slug: "exit-planning-strategies-2024",
      author: {
        name: "Sarah Johnson",
        role: "Exit Planning Consultant",
        avatar: "/api/placeholder/100/100"
      }
    },
    {
      title: "Maximizing Business Value",
      excerpt: "Learn effective strategies to increase your business's market value...",
      coverImage: "/api/placeholder/800/400",
      publishDate: "2024-01-05",
      readTime: "6 min read",
      category: "Business Growth",
      slug: "maximizing-business-value",
      author: {
        name: "Michael Brown",
        role: "Business Valuation Expert",
        avatar: "/api/placeholder/100/100"
      }
    }
  ];

  const handleReadMore = (slug: string) => {
    console.log(`Navigating to blog post: ${slug}`);
    // Implement navigation logic here
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl">
          <h1 className={title({ color: "yellow", className: "mb-4" })}>
            Blog & Insights
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            Expert insights, industry trends, and practical advice for business owners.
          </p>

          {/* Featured Post */}
          <Card className="mb-12 bg-primary/5">
            <div className="grid md:grid-cols-2 gap-6">
              <Image
                alt={blogPosts[0].title}
                className="object-cover w-full h-full"
                src={blogPosts[0].coverImage}
              />
              <CardBody className="p-6">
                <span className="text-primary mb-2 block">{blogPosts[0].category}</span>
                <h2 className={title({ size: "sm", className: "mb-4" })}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-default-600 mb-4">{blogPosts[0].excerpt}</p>
                <p className="text-sm text-default-500 mb-6">
                  {formatDate(blogPosts[0].publishDate)} · {blogPosts[0].readTime}
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <Avatar src={blogPosts[0].author.avatar} size="sm" />
                  <div>
                    <p className="text-sm font-semibold">{blogPosts[0].author.name}</p>
                    <p className="text-xs text-default-500">{blogPosts[0].author.role}</p>
                  </div>
                </div>
                <Button
                  color="primary"
                  onClick={() => handleReadMore(blogPosts[0].slug)}
                >
                  Read Full Article
                </Button>
              </CardBody>
            </div>
          </Card>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard
                key={index}
                {...post}
                onClick={handleReadMore}
              />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default BlogPage;
