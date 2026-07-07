import { useRef } from "react";

const Task_seventeen = () => {
  const inref = useRef();
  const pararef = useRef();

  const homeref = useRef();

  const aboutref = useRef();
  const contactref = useRef();
  const toggleref = useRef();
  const paratoggle = useRef();
  const home = () => {
    homeref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const about = () => {
    aboutref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const contact = () => {
    contactref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handlein = () => {
    const data = inref.current.value;
    pararef.current.innerHTML = data;
  };
  
const isVisible = useRef(true); // tracks state without re-rendering

const toggle = () => {
  isVisible.current = !isVisible.current;
  paratoggle.current.style.display = isVisible.current ? "block" : "none";
};
  return (
    <>
      <div>
        <h2>task1</h2>
        <div>
          <input
            type="text"
            onChange={handlein}
            v
            placeholder="enter something"
            ref={inref}
            className="border"
          />
        </div>
        <p ref={pararef}></p>
      </div>
      <hr />
      <div>
        <h1>tak2</h1>
        <button onClick={home} className="border m-1">
          Home
        </button>
        <button onClick={about} className="border m-1">
          about
        </button>
        <button onClick={contact} className="border m-1">
          contact
        </button>
        <section ref={homeref}>
          <h1 className="font-bold">Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            minus facilis eligendi eaque veritatis modi rerum quas numquam, quis
            placeat sunt obcaecati ratione consectetur excepturi debitis magnam
            cupiditate? Officiis, id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, repellendus fugit officiis eveniet
            repudiandae dolores! Enim iusto mollitia odit ad quidem facere,
            voluptatum culpa veritatis, maxime consequuntur aperiam debitis
            assumenda? Exercitationem aliquam sapiente alias accusamus magni
            facere! Maiores quam libero, ducimus omnis dignissimos itaque sed
            explicabo repudiandae quidem consequuntur enim non, nam modi at
            quisquam laboriosam impedit tempore! Accusamus, quam. Esse sequi
            debitis facilis consequatur officia ad facere rem quasi ea fugiat
            consectetur est temporibus consequuntur neque obcaecati, sapiente
            placeat soluta sint sit, vel, dolore perferendis. Praesentium sed
            repellendus magnam.
          </p>
        </section>
        <section ref={aboutref}>
          <h1 className="font-bold">about</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            minus facilis eligendi eaque veritatis modi rerum quas numquam, quis
            placeat sunt obcaecati ratione consectetur excepturi debitis magnam
            cupiditate? Officiis, id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, repellendus fugit officiis eveniet
            repudiandae dolores! Enim iusto mollitia odit ad quidem facere,
            voluptatum culpa veritatis, maxime consequuntur aperiam debitis
            assumenda? Exercitationem aliquam sapiente alias accusamus magni
            facere! Maiores quam libero, ducimus omnis dignissimos itaque sed
            explicabo repudiandae quidem consequuntur enim non, nam modi at
            quisquam laboriosam impedit tempore! Accusamus, quam. Esse sequi
            debitis facilis consequatur officia ad facere rem quasi ea fugiat
            consectetur est temporibus consequuntur neque obcaecati, sapiente
            placeat soluta sint sit, vel, dolore perferendis. Praesentium sed
            repellendus magnam.
          </p>
        </section>
        <section ref={contactref}>
          <h1 className="font-bold">contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            minus facilis eligendi eaque veritatis modi rerum quas numquam, quis
            placeat sunt obcaecati ratione consectetur excepturi debitis magnam
            cupiditate? Officiis, id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, repellendus fugit officiis eveniet
            repudiandae dolores! Enim iusto mollitia odit ad quidem facere,
            voluptatum culpa veritatis, maxime consequuntur aperiam debitis
            assumenda? Exercitationem aliquam sapiente alias accusamus magni
            facere! Maiores quam libero, ducimus omnis dignissimos itaque sed
            explicabo repudiandae quidem consequuntur enim non, nam modi at
            quisquam laboriosam impedit tempore! Accusamus, quam. Esse sequi
            debitis facilis consequatur officia ad facere rem quasi ea fugiat
            consectetur est temporibus consequuntur neque obcaecati, sapiente
            placeat soluta sint sit, vel, dolore perferendis. Praesentium sed
            repellendus magnam.
          </p>
        </section>
      </div>
      <hr />
      <div>
        <input type="text" ref={toggleref} />
        <p ref={paratoggle}></p>
        <button onClick={toggle}>
    toggle
  </button>
      </div>

      <div>
        

      </div>
    </>
  );
};

export default Task_seventeen;
