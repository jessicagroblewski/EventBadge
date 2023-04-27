import { LitElement, html, css } from 'lit';
import "./Project3.js";
export class RemixTypes extends LitElement{
    static get tag() {
        return 'remix-types';
    }
    static get properties() {
        return{
          types: { type: Array},
        
          tvColor: { type: String},
          tvIntenna: {type: String},
          badgeBorder: { type: String},
          textColor: { type: String},
          tvOutline: { type: String},
          cardColor: { type: String},

          topblock1: { type: String},
          topblock2: { type: String},
          topblock3: { type: String},
          topblock4: { type: String},
          topblock5: { type: String},
          topblock6: { type: String},
          topblock7: { type: String},

          bottomBlock1: { type: String},
          bottomBlock3: { type: String},
          bottomBlock5: { type: String},
          bottomBlock7: { type: String},

          badgeTitleColor: { type: String},
          eventBadgeTitle: { type: String},
          eventBadgeAuthor: { type: String},
          titleOfAuthor: { type: String},
          brandName: { type: String},
          image: { type: String},
          logo: { type: String},          
          
        }
    }

    constructor(){
          super();
          this.types=[];
          this.tvColor= 'orange';
          this.tvIntenna= 'pink';
          this.badgeBorder= 'black';
          this.textColor= 'orange';
          this.tvOutline= 'grey';
          this.cardColor= 'white';
      
          this.topblock1='red';
          this.topblock2='orange';
          this.topblock3='yellow';
          this.topblock4='green';
          this.topblock5='blue';
          this.topblock6= 'purple';
          this.topblock7='pink';
      
          this.bottomBlock1='green';
          this.bottomBlock3='green';
          this.bottomBlock5='green';
          this.bottomBlock7='green';
      
          this.badgeTitleColor='white';
      
          this.eventBadgeTitle='PUPPIES';
          this.eventBadgeAuthor='Jess';
          this.titleOfAuthor='Professional Coder';
          this.brandName='Amazing!'
          this.logo= 'https://media.cnn.com/api/v1/images/stellar/prod/210602230802-01-puppy-social-skills-wellness-sci.jpg?q=x_2,y_88,h_898,w_1596,c_crop/h_720,w_1280/f_webp';
          this.image= 'https://www.banfield.com/-/media/Project/Banfield/Main/en/Wellness_at_Banfield/Puppy_Hub/Puppy_Hub_0-3_Months/0992_01_4x3L.jpg?h=1153&w=1536&rev=1187902491b444ddaed3186dddac7b64&hash=0EBAED4A670DF63314C9994D96AE80AA';
          this.updateType();
    }


    static get styles() {
        return css`
      :host([sepia]){
      filter: sepia(1);
    }
      :host([grayscale]){
      filter: grayscale(1);
    }
      .logo{
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0px;
        right: 0px;
        z-index: 2;
      }

      .wrapper {
        width: 340px;
        height: 258px;
        position: relative;
      }
      .item {
        display: inline-flex;
      }
      :host {
            display: block;
        }
      
        `;
    }

    updateType() { 
     const address = new URL('../assets/type.json', import.meta.url).href;
     fetch (address).then((response) => { 
      if (response.ok){
            return response.json()
      }
      return [];
       })
       .then((data) => {
              this.types = data;
              console.log(data);
          });

            

     }

    render(){
      return html`
      <div class="wrapper">
      ${this.types.map(type => html`
      <div class="item"> 
      <project-3
      tvColor="${type.tvColor}"
      tvIntenna="${type.tvIntenna}"
      badgeBorder="${type.badgeBorder}"
      textColor="${type.textColor}"
      tvOutline="${type.tvOutline}"
      cardColor="${type.cardColor}"
      topblock1="${type.topblock1}"
      topblock2="${type.topblock2}"
      topblock3="${type.topblock3}"
      topblock4="${type.topblock4}"
      topblock5="${type.topblock5}"
      topblock6="${type.topblock6}"
      topblock7="${type.topblock7}"
      bottomBlock1="${type.bottomBlock1}"
      bottomBlock3="${type.bottomBlock3}"
      bottomBlock5="${type.bottomBlock5}"
      bottomBlock7="${type.bottomBlock7}"
      badgeTitleColor="${type.badgeTitleColor}"
      eventBadgeTitle="${type.eventBadgeTitle}"
      eventBadgeAuthor="${type.eventBadgeAuthor}"
      titleOfAuthor="${type.titleOfAuthor}"
      brandName="${type.brandName}"
      logo="${type.logo}"
      image="${type.image}"
      ></project-3>
      </div>
      `)}
      </div>
      `;
    }
}
customElements.define(RemixTypes.tag, RemixTypes);