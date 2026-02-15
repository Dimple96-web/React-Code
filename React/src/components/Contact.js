const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-3 m-3">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-1 m-1"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-1 m-1"
          placeholder="message"
        />
        <button className=" bg-green-300 rounded-xl p-2 m-1">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
