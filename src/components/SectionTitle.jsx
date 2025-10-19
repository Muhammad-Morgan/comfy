const SectionTitle = ({ text }) => {
  return (
    <aside className="border-b border-base-300 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </aside>
  );
};

export default SectionTitle;
