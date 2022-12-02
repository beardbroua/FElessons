// 1
let container = document.querySelector('.first-task')
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyE') {
        event.preventDefault()
        let textBlock = document.querySelector('.text-block')
        let textContent = textBlock.innerText
        let textArea = document.createElement('textarea')
        textArea.classList.add('text-area')
        textArea.innerHTML = textContent
        textBlock.remove()
        container.append(textArea)
    }
    if (event.ctrlKey && event.code === 'KeyS') {
        event.preventDefault()
        let textArea = document.querySelector('.text-area')
        console.log(textArea)
        let textBlock = document.createElement('div')
        textBlock.classList.add('text-block')
        let textContent = textArea.value
        textBlock.innerHTML = textContent
        textArea.remove()
        container.append(textBlock)
    }
}
)
// 2
const theads = document.querySelectorAll(".table_sort thead");
theads.forEach(thead => thead.addEventListener("click", evt => getSort(evt)));
function getSort({ target }) {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const thList = Array.from(target.parentNode.cells);
    const index = thList.indexOf(target);
    const collator = new Intl.Collator(["en", "ru"], { numeric: true });
    const comparator = (index, order) => (a, b) => {
        return (
            order *
            collator.compare(a.children[index].textContent, b.children[index].textContent)
        );
    };
    const tablesBodies = Array.from(target.closest("table").tBodies);
    tablesBodies.forEach(tBody => {
        tBody.append(...Array.from(tBody.rows).sort(comparator(index, order)));
    });
}

// 3

const resizer = document.querySelector(".third-task");
const resBtn  = document.getElementById("button");

resBtn.addEventListener('mousedown', startResize);

let X,
    Y,
    startWidth,
    startHeight;

function startResize (event) {
    event.preventDefault();
    X = event.clientX;
    Y = event.clientY;
    startWidth = resizer.offsetWidth;
    startHeight = resizer.offsetHeight;
    window.addEventListener('mousemove', resizing);
    window.addEventListener('mouseup', stopResize);
}

function resizing (event) {
    let changeX = event.clientX - X;
    let changeY = event.clientY - Y;
    resizer.style.width = `${startWidth + changeX}px`;
    resizer.style.height = `${startHeight + changeY}px`;
}

function stopResize () {
    window.removeEventListener('mousemove', resizing);
}
