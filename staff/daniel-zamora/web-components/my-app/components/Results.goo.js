class ResultsGoo extends Component {
    constructor(webs) {
      super(`<section class="result">
        </section>`);
      let feedback;
      if (webs.length) {
        const list = document.createElement("ul");

        webs.forEach(({title, description, link}) =>{
          const item = document.createElement('li')

          const anchor = document.createElement('a')
          anchor.href = link;
          anchor.target = blank;
          anchor.innerText = title;

          item.append(anchor);

          const _description = document.createElement('p');
          _description.innerText = description;
        })
        // const list = document.createElement("ul");
        // for (let i = 0; i < matchingList.length; i++) {
        //   list.innerHTML += `<li>${matchingList[i].title}<br>${matchingList[i].description}<br>
        //   <a href="${matchingList[i].link}">${matchingList[i].link}</a></li>`;
        //   list.innerHTML += `<hr>`;
        //   this.container.append(list);
        }
       else {
        feedback = new Feedback("You have 0 results :(", "warning");
        this.container.appendChild(feedback.container);
      }
    }
  }