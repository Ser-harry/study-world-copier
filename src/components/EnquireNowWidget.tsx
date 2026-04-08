import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const EnquireNowWidget = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData from the event target
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwisYnDrAGG9xAXJ4_7IG_LdjfxUQInu0PRBjfx65P-f75m3CDUPy-5NaWhlgeAy6wz/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
      
      toast({ 
        title: "Enquiry Submitted Successfully!", 
        description: "Our admissions team will contact you shortly." 
      });
      setOpen(false);
    } catch (error) {
      toast({ 
        variant: "destructive", 
        title: "Submission Error", 
        description: "Something went wrong. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          id="enquire-now-widget"
          aria-label="Enquire Now – Contact us"
          style={{
            position: "fixed",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            background: "linear-gradient(180deg, #f97316 0%, #ea580c 100%)",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.82rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "18px 10px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            boxShadow: "none",
            textDecoration: "none",
            whiteSpace: "nowrap",
            cursor: "pointer",
            transition: "background 0.25s ease, box-shadow 0.25s ease, padding 0.2s ease",
            userSelect: "none",
            border: "none",
            outline: "none"
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "linear-gradient(180deg, #ea580c 0%, #c2410c 100%)";
            el.style.paddingRight = "14px";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "linear-gradient(180deg, #f97316 0%, #ea580c 100%)";
            el.style.paddingRight = "10px";
          }}
        >
          {/* Small arrow icon (rotated to point right since writing-mode is vertical) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(90deg)", flexShrink: 0 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Enquire Now
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Student Enquiry Form</DialogTitle>
          <DialogDescription>
            Fill out your details below and our guidance counselors will get in touch.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required placeholder="Ex. Rahul Deshmukh" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required placeholder="rahul@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Preferred Course</Label>
            <Input id="course" name="course" required placeholder="Ex. B.E. Computer Science" />
          </div>

          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquireNowWidget;
