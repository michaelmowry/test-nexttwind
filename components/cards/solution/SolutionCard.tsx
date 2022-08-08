import Image from 'next/image';

export interface ISolutionCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const SolutionCard: React.FC<ISolutionCard> = ({
  author,
  body,
  tag,
  time,
  title,
}) => {
  return (
    <div className="p-10">
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <Image
          className="w-full"
          width="400"
          height="300"
          src="/web-conference-man1.jpeg"
          alt="{author}"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">{body}</p>
          <div className="text-base text-gray-700">
            {author} - {time}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
