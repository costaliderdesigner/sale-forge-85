import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, TrendingUp, Target, Megaphone, Award, Search } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Todos", value: "all", icon: BookOpen },
  { name: "Landing Pages", value: "landing-pages", icon: Target },
  { name: "Marketing Digital", value: "marketing", icon: TrendingUp },
  { name: "Tráfego Pago", value: "traffic", icon: Megaphone },
  { name: "Branding", value: "branding", icon: Award },
  { name: "SEO", value: "seo", icon: Search },
];

const blogPosts = [
  {
    id: 1,
    title: "Como Criar uma Landing Page que Converte 10x Mais",
    description: "Descubra os elementos essenciais que fazem uma landing page transformar visitantes em clientes pagantes.",
    category: "landing-pages",
    image: "/lovable-uploads/01a94ed3-996a-4ec2-898c-e1f37b77d499.png",
    readTime: "8 min",
    featured: true
  },
  {
    id: 2,
    title: "5 Estratégias de Tráfego Pago para Pequenos Negócios",
    description: "Aprenda como otimizar seus anúncios no Google e Facebook para gerar mais leads com menos investimento.",
    category: "traffic",
    image: "/lovable-uploads/710fafda-a3ac-4cd4-9293-828cc340f1b6.png",
    readTime: "6 min",
    featured: false
  },
  {
    id: 3,
    title: "Psicologia das Cores em Landing Pages: O que Funciona",
    description: "Entenda como as cores influenciam a decisão de compra e aumentam suas conversões significativamente.",
    category: "marketing",
    image: "/lovable-uploads/73075cc4-247f-4587-9f13-19d1b0dbd7cd.png",
    readTime: "5 min",
    featured: false
  },
  {
    id: 4,
    title: "SEO Local: Como Aparecer no Google da Sua Cidade",
    description: "Estratégias práticas para dominar as buscas locais e atrair mais clientes da sua região.",
    category: "seo",
    image: "/lovable-uploads/7adc9aff-7fca-4237-bdd5-24821fd80e81.png",
    readTime: "7 min",
    featured: false
  },
  {
    id: 5,
    title: "Identidade Visual que Vende: Cases de Sucesso",
    description: "Veja como empresas transformaram seus negócios investindo em branding profissional e estratégico.",
    category: "branding",
    image: "/lovable-uploads/c6b1a9dc-5221-48e6-ab22-dbf392789c67.png",
    readTime: "9 min",
    featured: false
  },
  {
    id: 6,
    title: "Funil de Vendas Digital: Do Lead ao Cliente Fiel",
    description: "Construa um funil automatizado que nurture seus leads e os transforme em clientes recorrentes.",
    category: "marketing",
    image: "/lovable-uploads/d7954e6b-64c6-4ce5-9dc7-7d688f0548b7.png",
    readTime: "10 min",
    featured: true
  }
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com seu sistema de email marketing
    console.log("Email inscrito:", email);
    setEmail("");
    // Adicionar toast de sucesso aqui
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dicas de Marketing Digital para{" "}
            <span className="text-primary">Empreendedores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aqui você encontra estratégias práticas, tendências e insights para 
            transformar sua presença online em resultados reais.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="font-medium"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-muted hover:border-primary/20">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Destaque
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm text-muted-foreground">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      Leia mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Newsletter Signup */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">📧 Newsletter Exclusiva</CardTitle>
                  <CardDescription>
                    Receba dicas exclusivas de marketing digital no seu e-mail
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Button type="submit" className="w-full">
                    Inscrever-se Grátis
                  </Button>
                </form>
              </Card>

              {/* Popular Posts */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">🔥 Mais Lidos</CardTitle>
                </CardHeader>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3 group cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* CTA Card */}
              <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg text-white">🚀 Precisa de Ajuda?</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Nossa equipe pode criar sua landing page profissional
                  </CardDescription>
                </CardHeader>
                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  Solicitar Orçamento
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Pronto para Transformar seu Negócio Online?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicite agora sua landing page de alta conversão e comece a gerar mais 
            leads e vendas para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              Criar Minha Landing Page
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="font-semibold">
              Ver Nossos Cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;