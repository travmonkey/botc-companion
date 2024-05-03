import React from 'react';
import PlayerTokens from "./components/PlayerTokens";
import {Player, Character} from "./components/PlayerTokens";

function App() {
    return (
        <div>
            <PlayerTokens players={[
                new Player("Bill", Character.IMP),
                new Player("Bob", Character.WASHERWOMAN),
                new Player("Jim", Character.POISONER),
                new Player("Greg", Character.CHEF),
                new Player("Tony", Character.BARON),
            ]}/>
        </div>
    )
}

export default App