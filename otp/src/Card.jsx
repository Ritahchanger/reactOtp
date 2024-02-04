import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-sm rounded cursor-pointer overflow-hidden shadow-lg mx-4 my-4 transform hover:scale-105 transition-transform">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      imageSrc: 'https://placekitten.com/300/200',
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      imageSrc: 'https://placekitten.com/301/200',
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3.',
      imageSrc: 'https://placekitten.com/302/200',
    },
  ];

  return (
    <div className="flex justify-center items-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
