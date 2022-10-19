import { Component } from 'react';
import css from './AccordionItem.module.css';
export class AccordionItem extends Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <>
        <div className={css.container}>
          <div className={css.accordion}>
            <div className={css.accordionItem}>
              <p
                className={this.state.isOpen ? `${css.title} ${css.isExpanded}` : `${css.title}`}
                onClick={this.handleClick}
              >
                First Question
              </p>
              <div
                className={
                  this.state.isOpen ? `${css.content} ${css.isExpanded}` : `${css.content}`
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam.
                  Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam
                  imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum.
                  Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur
                  enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
                  mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum
                  massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis
                  porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat
                  tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla
                  aliquam magna nec elementum tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
