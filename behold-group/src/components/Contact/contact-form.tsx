import React from "react";
import { Input, Textarea, Button, Select, SelectItem } from "@heroui/react";
import { Card} from "@heroui/react";
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  subjects: { value: string; label: string }[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  isSubmitting,
  subjects,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
}) => {
  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            isRequired
            errorMessage={errors.name}
            isInvalid={!!errors.name}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            isRequired
            errorMessage={errors.email}
            isInvalid={!!errors.email}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <Select
          label="Subject"
          placeholder="Select a subject"
          selectedKeys={formData.subject ? [formData.subject] : []}
          onChange={(e) => handleSelectChange(e.target.value)}
          isRequired
          errorMessage={errors.subject}
          isInvalid={!!errors.subject}
        >
          {subjects.map((subject) => (
            <SelectItem key={subject.value} value={subject.value}>
              {subject.label}
            </SelectItem>
          ))}
        </Select>

        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          minRows={4}
          isRequired
          errorMessage={errors.message}
          isInvalid={!!errors.message}
        />

        <Button
          type="submit"
          color="primary"
          className="w-full"
          isLoading={isSubmitting}
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
