export default function ButtonPrimary({ title, py }: any) {
  return (
    <button
      type="submit"
      className={`inline-block px-4 py-${py} text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm`}>
      {title}
    </button>
  );
}
