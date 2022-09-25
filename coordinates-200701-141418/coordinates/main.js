const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");


addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  //getBoundingClientRect는 해당 객체 즉 target의 정보를 불러올 수 있는 api로서
  //아래의 targetRect라는 것의 width,height 등을 구할 수 있다.
  const targetHalfWidth = targetRect.width / 2 ;
  const targetHalfHeight = targetRect.height / 2


  document.addEventListener("mousemove", (event) => {
    // const x = event.clientX;
    // const y = event.clientY;
    // console.log(`${x} ${y} `);

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top= `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // tag.innerHTML = `${x}px ${y}px`;

    const x = event.clientX;
    const y = event.clientY;

    

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px ,${y-targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px ,${y}px)`;
    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    tag.innerHTML = ` ${x}px ${y}px`;
  });
});
