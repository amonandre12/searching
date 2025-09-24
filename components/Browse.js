// The browse content 
'use client'
import { useState } from 'react';
import { cards } from '@/datas/cardList';
import Image from 'next/image';
import '@/styles/Browse.css';

// Import des composants
import KickstartPage from '@/components/KickstartPage';
import ComponentPage from '@/components/ComponentPage';

function Browse() {
  const [activePage, setActivePage] = useState(null);

  // Associer chaque id de card à une page
  const renderPage = () => {
    switch (activePage) {
      case 1: return <KickstartPage/>;
      case 3: return <ComponentPage/>;
      default: return null;
    }
  };

  return (
    <div>
     
     <div>
      <h1>Available mentoring sessions </h1>
      <p>From an one-on-one introduction to React&apos;s boosic all the way up to a deep dive into state mechanics -we got just this right session for you!</p>
     </div>
     
      {activePage ? (
        // Quand une page est active
        <div className="container">
          <button onClick={() => setActivePage(null)} className = 'browse_btn'>⬅ Retour</button>
          {renderPage()}
        </div>
      ) : (
        
        <div className="browse_page">
          {cards.map((card) => (
            <div key={card.id} className="images_card">
              <Image
                src={card.src}
                alt={card.alt}
                width={360}
                height={230}
              />
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              {/* Ici chaque bouton active sa page */}
              <button onClick={() => setActivePage(card.id)} className = 'browse_btn'>
                Learn more
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Browse;
