import React from 'react';

function BlogReadTime({ date, readTime }) {
  return (
    <aside>
      <p className="date-style">
        {date} | {readTime} min read time
      </p>
    </aside>
  );
}

export default BlogReadTime;
