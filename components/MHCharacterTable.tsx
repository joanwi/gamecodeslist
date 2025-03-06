const data = [
  {
    character: "Kratos",
    designCode: "966EP8PU3P47",
    type: "Hunter",
    creator: "OnlyGuides",
  },
  {
    character: "Keanu Reeves",
    designCode: "ES4E393D5U48",
    type: "Hunter",
    creator: "BlurpleCMYK",
  },
  {
    character: "Geralt of Rivia",
    designCode: "PN5AL8K78EY5",
    type: "Hunter",
    creator: "Gullible-Ad8788",
  },
  {
    character: "Ninja Raccoon",
    designCode: "JL5QH4JK37N6",
    type: "Palico",
    creator: "Jur-P",
  },
];

const CharacterTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="hidden w-full md:table">
        <thead>
          <tr className="text-left border-b text-sm">
            <th className="pb-3 px-4">Character</th>
            <th className="pb-3 px-4">Design Code</th>
            <th className="pb-3 px-4">Type</th>
            <th className="pb-3 px-4">Creator</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((item) => (
            <tr key={item.designCode} className="border-b">
              <td className="py-3 px-4 font-medium">{item.character}</td>
              <td className="py-3 px-4 text-gray-600">{item.designCode}</td>
              <td className="py-3 px-4">{item.type}</td>
              <td className="py-3 px-4 text-gray-600">{item.creator}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="md:hidden space-y-6">
        {data.map((item) => (
          <div key={item.designCode} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-center p-2">
              <span className="font-medium">Character</span>
              <span className="text-right">{item.character}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              <span className="font-medium">Design Code</span>
              <span className="text-gray-600">{item.designCode}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              <span className="font-medium">Type</span>
              <span>{item.type}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              <span className="font-medium">Creator</span>
              <span className="text-gray-600">{item.creator}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterTable;
