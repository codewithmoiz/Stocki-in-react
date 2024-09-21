import React from 'react';
import Masonry from 'react-masonry-css';

const MasonryLayout = () => {
    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1726393500770-be9efcab65db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjh8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 1' },
        { id: 2, src: 'https://images.unsplash.com/photo-1726164959171-291645df9ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjB8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 2' },
        { id: 3, src: 'https://plus.unsplash.com/premium_photo-1674147611070-bbca5e2725e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTN8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 3' },
        { id: 4, src: 'https://images.unsplash.com/photo-1726247419938-a8980d9fa429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDZ8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 4' },
        { id: 5, src: 'https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTF8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 5' },
        { id: 1, src: 'https://images.unsplash.com/photo-1726393500770-be9efcab65db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjh8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 1' },
        { id: 2, src: 'https://images.unsplash.com/photo-1726164959171-291645df9ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjB8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 2' },
        { id: 3, src: 'https://plus.unsplash.com/premium_photo-1674147611070-bbca5e2725e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTN8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 3' },
        { id: 4, src: 'https://images.unsplash.com/photo-1726247419938-a8980d9fa429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDZ8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 4' },
        { id: 5, src: 'https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTF8fHxlbnwwfHx8fHw%3D', alt: 'Random Image 5' },
      ];

  // Breakpoint columns object
  const breakpointColumnsObj = {
    default: 4, // Default 4 columns
    1100: 3, // 3 columns for screens <= 1100px
    700: 2,  // 2 columns for screens <= 700px
    500: 1   // 1 column for screens <= 500px
  };

  return (
    <div className="container mx-auto p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4" // Negative margin to eliminate gaps
        columnClassName="pl-4" // Add padding to columns
      >
        {images.map(image => (
          <div key={image.id} className="mb-4">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
