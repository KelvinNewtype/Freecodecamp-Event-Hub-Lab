const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Spring Coding Workshop",
    "startDate": "2025-03-15T09:00",
    "endDate": "2025-03-15T17:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Tech Hub Center",
      "address": "123 Innovation Drive, Tech City"
    },
    "image": "https://yourwebsite.com/images/spring-coding-workshop.jpg",
    "description": "A hands-on workshop on modern web development techniques.",
    "offers": {
      "@type": "Offer",
      "url": "https://yourwebsite.com/events/spring-coding-workshop",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-12-01T00:00"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Annual Tech Meetup",
    "startDate": "2025-04-20T10:00",
    "endDate": "2025-04-20T16:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Innovation Hall",
      "address": "456 Tech Avenue, Tech City"
    },
    "image": "https://yourwebsite.com/images/annual-tech-meetup.jpg",
    "description": "Network with professionals and explore the latest in technology trends.",
    "offers": {
      "@type": "Offer",
      "url": "https://yourwebsite.com/events/annual-tech-meetup",
      "price": "Free",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }
];

const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);
