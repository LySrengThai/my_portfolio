import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { createElement, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/portfolio";

const labelClass = "mb-2 block text-sm font-medium";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: "Email copied", description: profile.email });
    } catch {
      toast({
        title: "Couldn't copy automatically",
        description: `You can copy it manually: ${profile.email}`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    // Simulated submission: no backend is wired up yet.
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <Section id="contact" index="06" label="Contact" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="max-w-md text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {details.map(({ icon, label, value, href, copy }) => (
              <li key={label} className="flex items-center gap-4 py-4">
                {createElement(icon, {
                  size: 18,
                  className: "text-muted-foreground",
                })}
                <div>
                  <p className="eyebrow">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm">{value}</p>
                  )}
                </div>
                {copy && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="ml-auto rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5 p-6 md:p-8">
          <div>
            <label htmlFor="name" className={labelClass}>
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              className="input-base"
              placeholder="Lysreng Thai"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="input-base"
              placeholder="thailysreng33@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="input-base resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </Section>
  );
};
