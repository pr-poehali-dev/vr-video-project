import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const services = [
    {
      icon: "Video",
      title: "Видео-производство",
      description: "Создание рекламных роликов, корпоративных фильмов и контента для социальных сетей"
    },
    {
      icon: "Sparkles",
      title: "Анимация",
      description: "2D и 3D анимация, моушн-дизайн и визуальные эффекты для любых задач"
    },
    {
      icon: "Box",
      title: "3D графика",
      description: "Моделирование, визуализация продуктов и создание фотореалистичных рендеров"
    },
    {
      icon: "Glasses",
      title: "VR опыт",
      description: "Разработка виртуальных туров, презентаций и интерактивных VR-приложений"
    }
  ];

  const portfolio = [
    {
      title: "Рекламная кампания Tech Brand",
      category: "Видео",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
    },
    {
      title: "3D визуализация продукта",
      category: "3D",
      image: "https://images.unsplash.com/photo-1618504641161-e1d1e0f13f82?w=800&q=80"
    },
    {
      title: "Анимированный логотип",
      category: "Анимация",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&q=80"
    },
    {
      title: "VR тур по недвижимости",
      category: "VR",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">CreativeStudio</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О студии</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Связаться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Создаём визуальные<br />
              <span className="text-primary">истории</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Мы превращаем идеи в захватывающий визуальный контент — от видео до VR-опыта
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Полный спектр визуальных решений для вашего бизнеса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-4">Портфолио</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Избранные проекты, которыми мы гордимся
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">О студии</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CreativeStudio — это команда профессионалов с многолетним опытом в создании 
                визуального контента. Мы работаем с ведущими брендами и помогаем им 
                рассказывать истории через видео, анимацию и инновационные технологии.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Наград</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Команда студии"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center">Контакты</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Готовы обсудить ваш проект? Свяжитесь с нами
          </p>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-medium">Email</div>
              <div className="text-muted-foreground">info@creativestudio.com</div>
            </div>
            <div>
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-medium">Телефон</div>
              <div className="text-muted-foreground">+7 (495) 123-45-67</div>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-medium">Адрес</div>
              <div className="text-muted-foreground">Москва, ул. Примерная 123</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/30 py-12 px-6 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">CreativeStudio</div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 CreativeStudio. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
