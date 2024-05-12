import React from 'react';
import ValuePropCard from './ValuePropCard';
// Example of using the updated ValuePropCard in a section

const valueProps = [
  {
    title: 'Interactive Learning',
    description: 'Dive into interactive quizzes and flashcards that make learning for the U.S. citizenship test both fun and effective.',
    color: 'text-blue-600' // Blue for interactive learning
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with our comprehensive dashboard that highlights your progress and areas needing improvement.',
    color: 'text-green-600' // Green for progress tracking
  },
  {
    title: 'Expert Guidance',
    description: 'Worried about pronunciation? Our flashcards guide you through correct answers and their pronunciations, ensuring you\'re well-prepared.',
    color: 'text-yellow-600' // Yellow for expert guidance
  },
  {
    title: 'Bilingual Support',
    description: 'Study with materials in both English and Spanish, designed to support a diverse range of learners effectively.',
    color: 'text-red-600' // Red for bilingual support
  }
];




export default function ValuePropsSection() {
  return (
    <div className="bg-gray-50 py-12 px-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
    {valueProps.map((prop, index) => (
      <ValuePropCard key={index} title={prop.title} description={prop.description} color={prop.color} />
    ))}
  </div>
    </div>
  );
}
