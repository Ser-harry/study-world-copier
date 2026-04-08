export default function TestimonialSection() {
  return (
    <section className="bg-background">
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <blockquote className="before:bg-primary relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            <p className="text-foreground text-lg italic">
              "Using Study World College of Engineering's resources has been a game-changer for my academic and professional growth. The perfect fusion of theory and practice."
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite className="font-bold text-foreground not-italic">Rahul Deshmukh</cite>
              <span
                aria-hidden
                className="bg-foreground/15 size-1 rounded-full"
              ></span>
              <span className="text-muted-foreground text-sm">Alumnus, Class of 2023</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
