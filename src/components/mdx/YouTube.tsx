interface YouTubeProps {
  id: string;
  title?: string;
  className?: string;
}

export default function YouTube({
  id,
  title = "YouTube video",
  className = "",
}: YouTubeProps) {
  return (
    <div
      className={`relative aspect-video rounded-lg overflow-hidden ${className}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
