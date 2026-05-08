const StatsBanner=()=> {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9",  label: "Rating" },
  ];
 
  return (
    <div className="bg-violet-600 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 text-center px-10 py-4 sm:py-0">
            <p className="text-4xl font-extrabold text-white tracking-tight leading-none mb-1">
              {s.value}
            </p>
            <p className="text-sm text-violet-200 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBanner;