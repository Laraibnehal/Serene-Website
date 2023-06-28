import React from "react";

// Components
import Services from "./Services";

const AboutParagraphComponent = ({ description, className }) => {
  return (
    <p
      className={`text-left mt-4 m-auto w-full min-h-[250px] p-4 ${className}`}
    >
      {description}
    </p>
  );
};

const About = () => {
  return (
    <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center " >
      <h1 className="font-cursive text-7xl text-gray-600 mb-10 text-center">
        about serene
      </h1>
      <div className="flex flex-col md:flex-row items-start justify-center gap-2">
        <div>
          <AboutParagraphComponent
            description={
              "Welcome to Serene, where fragrance becomes an exquisite journey of pure bliss and timeless elegance. Inspired by the ethereal beauty of nature and crafted with meticulous attention to detail, Serene by Laraib Nehal invites you to immerse yourself in a world of sensory enchantment. At Serene, we believe that fragrance has the power to transcend ordinary moments, transforming them into extraordinary memories. Each bottle holds a symphony of carefully selected notes, meticulously blended to create a harmonious olfactory masterpiece that dances on your skin and captures the essence of your soul."
            }
          />
          <AboutParagraphComponent
            description={
              "Every creation by Laraib Nehal is a testament to our unwavering commitment to quality and craftsmanship. From the delicate balance of the top notes to the lingering embrace of the base, our perfumes are a seamless fusion of artistry and passion. Each fragrance tells a unique story, weaving together emotions, memories, and dreams. With Serene, we aspire to awaken your senses and transport you to a realm of unparalleled beauty. Our perfumes are not merely scents; they are an expression of your individuality, an invisible aura that accompanies you on your journey through life. The exquisite bottles themselves are a work of art, reflecting the grace and sophistication that define your personal style."
            }
          />
        </div>
        <div className="min-h-[600px] border-sky-900 border-2 hidden md:block"></div>
        <div>
          <AboutParagraphComponent
            description={
              "Step into the world of Serene, where every fragrance is a whisper of elegance, a caress of femininity, and a celebration of life's precious moments. Whether you seek a fragrance that captivates with its timeless allure or one that radiates with the vibrancy of a new beginning, our collection offers a scent to suit every mood and occasion. Indulge in the intoxicating allure of Serene by Laraib Nehal and let the fragrances awaken your senses, ignite your imagination, and evoke a sense of serenity that lingers long after the perfume settles on your skin. Welcome to a world where beauty knows no boundaries and where every breath is an invitation to experience the extraordinary."
            }
          />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default About;
