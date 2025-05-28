type CardProps = {
  title: string;
  content: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
