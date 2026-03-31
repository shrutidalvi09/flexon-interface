const Team = () => (
  <div className="py-16 bg-white px-10 text-center">
    <h2 className="text-3xl font-bold mb-10">Project Team </h2>
    <div className="flex flex-wrap justify-center gap-10">
      {["Shreyas Dalvi", "Rudra", "Shivam", "Atharva", "Khali"].map(member => (
        <div key={member} className="w-40 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <p className="font-semibold">{member}</p>
        </div>
      ))}
    </div>
    <p className="mt-10 text-gray-600 font-medium text-lg">Project Guide: Mr. Nayan Sir [cite: 1]</p>
  </div>
);