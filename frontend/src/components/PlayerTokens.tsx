import React from 'react';
import Style from "./PlayerTokens.module.css"

function PlayerTokens({players}: { players: Player[] }) {
    players.sort((a: Player, b: Player) => (a.character - b.character))
    return (
        <div className={Style.container}>
            {players.map((player: Player) => (
                <button className={`${Style.token} ${player.character in EVIL_CHARACTERS ? Style.evil : Style.good}`} key={player.id}>
                    <div>{player.name}</div>
                    <div>{CHARACTER_STRINGS.get(player.character)}</div>
                </button>))}
        </div>
    )
}

export class Player {
    public id: React.Key

    constructor(public name: string, public character: Character) {
        this.id = crypto.randomUUID()
    }

}

export enum Character {
    POISONER,
    MONK,
    SCARLET_WOMAN,
    IMP,
    RAVENKEEPER,
    EMPATH,
    FORTUNE_TELLER,
    BUTLER,
    UNDERTAKER,
    SPY,
    CHEF,
    INVESTIGATOR,
    LIBRARIAN,
    MAYOR,
    SLAYER,
    SOLDIER,
    VIRGIN,
    WASHERWOMAN,
    DRUNK,
    RECLUSE,
    SAINT,
    BARON
}

const EVIL_CHARACTERS: Character[] = [
    Character.BARON,
    Character.POISONER,
    Character.SPY,
    Character.SCARLET_WOMAN,
    Character.IMP
]

const GOOD_CHARACTERS: Character[] = [
    Character.MONK,
    Character.RAVENKEEPER,
    Character.EMPATH,
    Character.FORTUNE_TELLER,
    Character.BUTLER,
    Character.UNDERTAKER,
    Character.CHEF,
    Character.INVESTIGATOR,
    Character.LIBRARIAN,
    Character.MAYOR,
    Character.SLAYER,
    Character.SOLDIER,
    Character.VIRGIN,
    Character.WASHERWOMAN,
    Character.DRUNK,
    Character.RECLUSE,
    Character.SAINT,
]

const CHARACTER_STRINGS = new Map<Character, string>([
    [Character.POISONER, "Poisoner"],
    [Character.MONK, "Monk"],
    [Character.SCARLET_WOMAN, "Scarlet Woman"],
    [Character.IMP, "Imp"],
    [Character.RAVENKEEPER, "Ravenkeeper"],
    [Character.EMPATH, "Empath"],
    [Character.FORTUNE_TELLER, "Fortune Teller"],
    [Character.BUTLER, "Butler"],
    [Character.UNDERTAKER, "Undertaker"],
    [Character.SPY, "Spy"],
    [Character.CHEF, "Chef"],
    [Character.INVESTIGATOR, "Investigator"],
    [Character.LIBRARIAN, "Librarian"],
    [Character.MAYOR, "Mayor"],
    [Character.SLAYER, "Slayer"],
    [Character.SOLDIER, "Soldier"],
    [Character.VIRGIN, "Virgin"],
    [Character.WASHERWOMAN, "Washerwoman"],
    [Character.DRUNK, "Drunk"],
    [Character.RECLUSE, "Recluse"],
    [Character.SAINT, "Saint"],
    [Character.BARON, "Baron"]
]);


export default PlayerTokens;

