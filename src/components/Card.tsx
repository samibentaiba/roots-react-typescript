// Default export
export default function Card(props: { title: string }) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
    </div>
  );
}
