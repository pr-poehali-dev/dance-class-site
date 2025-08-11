import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-lg sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-white">LADY DANCE</span>
            <br className="hidden sm:block" />
            <span className="text-hot-pink text-sm sm:text-lg font-normal ml-2 sm:ml-0">Анастасия Голубева</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-hot-pink transition-colors">О студии</a>
            <a href="#prices" className="hover:text-hot-pink transition-colors">Цены</a>
            <a href="#schedule" className="hover:text-hot-pink transition-colors">Расписание</a>
            <a href="#contact" className="hover:text-hot-pink transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 dance-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="block text-gradient">LADY</span>
              <span className="block text-white">DANCE</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-gray-300 px-4">
              Танцевальная студия для девушек в Люберцах
            </p>
            <p className="text-base sm:text-lg mb-12 text-gray-400 max-w-2xl mx-auto px-4">
              Jazz-funk • Strip Dance • Vogue dance<br />
              Развиваем гибкость, изящность и уверенность в себе ⭐️
            </p>
            <div className="flex flex-col gap-4 justify-center px-4 max-w-sm mx-auto sm:max-w-none sm:flex-row">
              <Button className="bg-hot-pink hover:bg-deep-pink text-white px-4 sm:px-8 py-4 text-sm sm:text-lg font-semibold rounded-full" onClick={() => window.open('tel:+79299046364', '_self')}>
                Пробное занятие — 600 ₽
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-4 sm:px-8 py-4 text-sm sm:text-lg rounded-full" onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}>
                Узнать расписание
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Styles Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/files/b9d2ad5a-4a2f-47cc-94f1-b2e0ac2941b8.jpg"
            alt="Lady Dance Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-gradient">Стили танца</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto px-4">
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-8 text-center hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hot-pink/20 flex items-center justify-center">
                <Icon name="Music" size={32} className="text-hot-pink" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Jazz-funk</h3>
              <p className="text-gray-700 leading-relaxed">
                Манерное исполнение, чёткие движения и микс элементов из разных танцевальных стилей
              </p>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-8 text-center hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple/20 flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Strip Dance</h3>
              <p className="text-gray-700 leading-relaxed">
                Танцы для девушек, нацеленные на развитие гибкости, изящности и повышения уверенности в себе
              </p>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-8 text-center hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Icon name="Crown" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Vogue Dance</h3>
              <p className="text-gray-700 leading-relaxed">
                Модное и гламурное направление, которое сочетает в себе танец, позирование и дефиле одновременно
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300">
              Также на занятии делаем <span className="text-hot-pink font-semibold">подкачку и растяжку</span> ⭐️
            </p>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-gradient">Стоимость занятий</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            {/* Trial Class */}
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-hot-pink text-white px-3 py-1 text-sm font-semibold">
                ПРОБНОЕ
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Пробное занятие</h3>
              <div className="text-4xl font-bold text-hot-pink mb-4">600 ₽</div>
              <p className="text-gray-700 mb-6">Познакомьтесь с нашими стилями танца</p>
              <Button className="w-full bg-hot-pink hover:bg-deep-pink text-white" onClick={() => window.open('tel:+79299046364', '_self')}>
                Записаться +7 929 904-63-64
              </Button>
            </Card>

            {/* Single Visit */}
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-2 text-black">Разовое посещение</h3>
              <div className="text-4xl font-bold text-purple mb-4">1100 ₽</div>
              <p className="text-gray-700 mb-6">Одно занятие без абонемента</p>
              <Button variant="outline" className="w-full border-purple text-purple hover:bg-purple hover:text-white" onClick={() => window.open('tel:+79299046364', '_self')}>
                Записаться +7 929 904-63-64
              </Button>
            </Card>

            {/* 4 Classes Package */}
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-black">Абонемент 4 занятия</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-2xl font-bold text-gold">3800 ₽</div>
                  <p className="text-sm text-gray-600">без переноса</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold">4000 ₽</div>
                  <p className="text-sm text-gray-600">2 переноса</p>
                </div>
              </div>
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black" onClick={() => window.open('tel:+79299046364', '_self')}>
                Записаться +7 929 904-63-64
              </Button>
            </Card>

            {/* 8 Classes Package */}
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-6 sm:col-span-2 lg:col-span-1 relative shadow-xl">
              <div className="absolute top-0 right-0 bg-violet text-white px-3 py-1 text-sm font-semibold">
                ПОПУЛЯРНЫЙ
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Абонемент 8 занятий</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-2xl font-bold text-violet">6800 ₽</div>
                  <p className="text-sm text-gray-600">без переноса</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-violet">7200 ₽</div>
                  <p className="text-sm text-gray-600">2 переноса</p>
                </div>
              </div>
              <Button className="w-full bg-violet hover:bg-purple text-white" onClick={() => window.open('tel:+79299046364', '_self')}>
                Записаться +7 929 904-63-64
              </Button>
            </Card>

            {/* Conditions */}
            <Card className="sm:col-span-2 lg:col-span-3 bg-white/95 backdrop-blur-sm border border-gray-200 p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-black flex items-center">
                <Icon name="Info" size={20} className="mr-2 text-hot-pink" />
                Условия абонементов
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong className="text-black">Без переноса:</strong> не позволяет переносить занятия</p>
                <p><strong className="text-black">С переносом:</strong> дает возможность пропустить занятия по любой причине. Пропущенные занятия переносятся на следующий месяц</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-gradient">Расписание</span>
          </h2>
          
          <div className="max-w-2xl mx-auto px-4">
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-4 sm:p-8 text-center shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Понедельник</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-hot-pink mb-2">21:00–22:00</div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Среда</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-hot-pink mb-2">21:00–22:00</div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  <Icon name="Clock" size={20} className="inline mr-2 text-gold" />
                  Продолжительность: 60 минут
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  Форма одежды: любая удобная (спортивные штаны, леггинсы, шорты, кроссовки)
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-gradient">Контакты</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 px-4">
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Icon name="MapPin" size={24} className="mr-3 text-hot-pink" />
                Адрес студии
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg sm:text-xl">Люберцы, ул. Кирова, д. 12, корп. 1</p>
                <p className="text-base sm:text-lg">2-й этаж, ЖК «Самоцветы»</p>
              </div>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Icon name="User" size={24} className="mr-3 text-gold" />
                Преподаватель
              </h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <img
                  src="https://cdn.poehali.dev/files/d16ebdb8-c94e-4063-9282-941a295fe984.jpg"
                  alt="Анастасия Голубева"
                  className="w-24 h-24 rounded-full object-cover border-2 border-hot-pink/20 shadow-lg"
                />
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-lg sm:text-xl text-black font-semibold mb-2">Анастасия Голубева</p>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">Профессиональный хореограф</p>
                  <Button className="bg-hot-pink hover:bg-deep-pink text-white flex items-center mx-auto sm:mx-0 text-sm sm:text-base px-4 py-2" onClick={() => window.open('https://t.me/+79299046364', '_blank')}>
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    <span className="hidden sm:inline">Написать в Telegram +7 929 904-63-64</span>
                    <span className="sm:hidden">Telegram +7 929 904-63-64</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16 px-4">
            <p className="text-lg sm:text-2xl text-white mb-4">
              Приходите на пробное занятие 🌸
            </p>
            <Button className="bg-gradient-to-r from-hot-pink to-purple hover:from-deep-pink hover:to-violet text-white px-4 sm:px-12 py-4 text-sm sm:text-xl font-semibold rounded-full max-w-full" onClick={() => window.open('tel:+79299046364', '_self')}>
              <span className="hidden sm:inline">Записаться на пробное — 600 ₽ | +7 929 904-63-64</span>
              <span className="sm:hidden">Записаться — 600 ₽<br />+7 929 904-63-64</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-white">LADY DANCE</span>
            <span className="text-hot-pink ml-2">STUDIO</span>
          </div>
          <p className="text-gray-400">
            © 2024 Lady Dance Studio. Анастасия Голубева
          </p>
        </div>
      </footer>
    </div>
  );
}