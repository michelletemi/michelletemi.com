import React from 'react';
import '../../App.css';
import img2 from '../../assets/img-2.jpg';

export default function Blog() {
  return (
    <div
      className="blog"
      style={{
        backgroundImage: `url(${img2})`
      }}
    >
      Blog
    </div>
  );
}