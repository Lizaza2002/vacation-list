import { Component } from "react";
import cream from './sun-cream.png'

export class List extends Component {
    state = {
        userInput: '',
        vacationList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    
    addItem(input) {
        if (input === '') {
            alert ("Ничего? Вероятно, вам пригодятся шлепки. Введите хотя бы их.")
        }
        else {
            let listArray = this.state.vacationList;
            listArray.push(input);
            this.setState({vacationList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.vacationList;
        listArray = [];
        this.setState({vacationList: listArray, userInput: ''})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    crossedWord(e) {
        const crossedLi = e.target;
        crossedLi.classList.toggle('crossed');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="Купальник, загран, что еще? :)"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>

                <div className="container">
                    <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Добавить</button>
                </div>

                <ul>
                    {this.state.vacationList.map((item, i) => (
                        <li onClick={this.crossedWord} key={i}>
                            <img width="25px" alt="" src={cream}/>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="container">
                    <button className="btn delete" onClick={() => this.deleteItem()}>Удалить</button>
                </div>
                </form>
            </div>
        )
    }
}