 import { useEffect, useState } from 'react';

export default function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [lastSaved, setLastSaved] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleAutoSave = async () => {
    if (!title && !content) return;
    const response = await fetch('http://localhost:5000/api/blogs/save-draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, tags, status: 'draft' }),
    });
    if (response.ok) {
      setLastSaved(new Date().toLocaleTimeString());
      console.log('Draft auto-saved');
    }
  };

  const handleManualSave = () => {
    handleAutoSave();
  };

  const handlePublish = async () => {
    const response = await fetch('http://localhost:5000/api/blogs/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, tags, status: 'published' }),
    });
    if (response.ok) {
      console.log('Blog published successfully');
    }
  };

  useEffect(() => {
    if (typingTimeout) clearTimeout(typingTimeout);
    const timeout = setTimeout(() => {
      handleAutoSave();
    }, 5000);
    setTypingTimeout(timeout);
  }, [title, content, tags]);

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Blog Editor</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      <textarea
        placeholder="Write your blog content here..."
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={handleManualSave}>Save as Draft</button>
        <button onClick={handlePublish}>Publish</button>
        {lastSaved && (
          <span style={{ fontSize: '0.875rem', color: '#666' }}>
            Last auto-saved at: {lastSaved}
          </span>
        )}
      </div>
    </div>
  );
}
