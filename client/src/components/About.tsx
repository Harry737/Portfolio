export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 text-center leading-relaxed">
          <p data-testid="text-about-content">
            Versatile and performance-driven DevOps Engineer / SRE with 3+ years of hands-on
            experience building resilient CI/CD pipelines, automating infrastructure, and deploying
            highly available microservices across AWS and Azure. Specialized in Kubernetes,
            Terraform, GitOps, observability, and cloud automation. Reduced deployment time by 40%
            and optimized cost by 60% through infrastructure redesign. Passionate about reliability
            engineering and scalable DevOps practices.
          </p>
        </div>
      </div>
    </section>
  );
}
