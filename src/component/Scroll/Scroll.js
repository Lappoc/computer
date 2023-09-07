
export const Scroll = () => {
    const RYB = 0.6;
    return(
        <div className="scroll_block">
            <button className="scroll_block__order_btn"> Заказать курс</button>
            <div className="scroll_block__count">
                <div className="scroll_block__count__people">
                    <p className="scroll_block__count__people__text">Количество всего: </p>
                    <p className="scroll_block__count__people__number">200</p>
                </div>
                <div className="scroll_block__count__people">
                    <p className="scroll_block__count__people__text">Успешно закончили курс: </p>
                    <p className="scroll_block__count__people__number">190</p>
                </div>
            </div>
            <div className="scroll_block__scroll">
                <div className="scroll_block__scroll__people">
                    <p className="scroll_block__count__people__text">Заработано ученикам: </p>
                    <p className="scroll_block__count__people__number">400 000₽</p>
                </div>
                <progress value={RYB} />
                <div className="scroll_block__count__people">
                    <p className="scroll_block__count__people__text">0₽</p>
                    <p className="scroll_block__count__people__text">1 000 000₽</p>
                </div>
            </div>
        </div>
    )
}