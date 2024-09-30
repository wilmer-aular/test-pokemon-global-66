import { IBasicPokemon } from "../interfaces"

const dataMock: IBasicPokemon[]  = [
{name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/', isFavorite: false},
{name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/', isFavorite: false},
{name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/', isFavorite: false},
{name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/', isFavorite: false},
{name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/', isFavorite: false},
{name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/', isFavorite: false},
{name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/', isFavorite: false},
{name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/', isFavorite: false},
{name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/', isFavorite: false},
{name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/', isFavorite: false},
{name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/', isFavorite: false},
{name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/', isFavorite: false},
{name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/', isFavorite: false},
{name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/', isFavorite: false},
{name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/', isFavorite: false},
{name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/', isFavorite: false},
{name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/', isFavorite: false},
{name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/', isFavorite: false},
{name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/', isFavorite: false},
{name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/', isFavorite: false},
{name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/', isFavorite: false},
{name: 'fearow', url: 'https://pokeapi.co/api/v2/pokemon/22/', isFavorite: false},
{name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/', isFavorite: false},
{name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/', isFavorite: false},
{name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/', isFavorite: false},
{name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/', isFavorite: false},
{name: 'sandshrew', url: 'https://pokeapi.co/api/v2/pokemon/27/', isFavorite: false},
{name: 'sandslash', url: 'https://pokeapi.co/api/v2/pokemon/28/', isFavorite: false},
{name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon/29/', isFavorite: false},
{name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/', isFavorite: false},
{name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon/31/', isFavorite: false},
{name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon/32/', isFavorite: false},
{name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon/33/', isFavorite: false},
{name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon/34/', isFavorite: false},
{name: 'clefairy', url: 'https://pokeapi.co/api/v2/pokemon/35/', isFavorite: false},
{name: 'clefable', url: 'https://pokeapi.co/api/v2/pokemon/36/', isFavorite: false},
{name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon/37/', isFavorite: false},
{name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon/38/', isFavorite: false},
{name: 'jigglypuff', url: 'https://pokeapi.co/api/v2/pokemon/39/', isFavorite: false},
{name: 'wigglytuff', url: 'https://pokeapi.co/api/v2/pokemon/40/', isFavorite: false},
{name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/', isFavorite: false},
{name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/', isFavorite: false},
{name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/', isFavorite: false},
{name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/', isFavorite: false},
{name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/', isFavorite: false},
{name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/', isFavorite: false},
{name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/', isFavorite: false},
{name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/', isFavorite: false},
{name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/', isFavorite: false},
{name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/', isFavorite: false},
{name: 'dugtrio', url: 'https://pokeapi.co/api/v2/pokemon/51/', isFavorite: false},
{name: 'meowth', url: 'https://pokeapi.co/api/v2/pokemon/52/', isFavorite: false},
{name: 'persian', url: 'https://pokeapi.co/api/v2/pokemon/53/', isFavorite: false},
{name: 'psyduck', url: 'https://pokeapi.co/api/v2/pokemon/54/', isFavorite: false},
{name: 'golduck', url: 'https://pokeapi.co/api/v2/pokemon/55/', isFavorite: false},
{name: 'mankey', url: 'https://pokeapi.co/api/v2/pokemon/56/', isFavorite: false},
{name: 'primeape', url: 'https://pokeapi.co/api/v2/pokemon/57/', isFavorite: false},
{name: 'growlithe', url: 'https://pokeapi.co/api/v2/pokemon/58/', isFavorite: false},
{name: 'arcanine', url: 'https://pokeapi.co/api/v2/pokemon/59/', isFavorite: false},
{name: 'poliwag', url: 'https://pokeapi.co/api/v2/pokemon/60/', isFavorite: false},
{name: 'poliwhirl', url: 'https://pokeapi.co/api/v2/pokemon/61/', isFavorite: false},
{name: 'poliwrath', url: 'https://pokeapi.co/api/v2/pokemon/62/', isFavorite: false},
{name: 'abra', url: 'https://pokeapi.co/api/v2/pokemon/63/', isFavorite: false},
{name: 'kadabra', url: 'https://pokeapi.co/api/v2/pokemon/64/', isFavorite: false},
{name: 'alakazam', url: 'https://pokeapi.co/api/v2/pokemon/65/', isFavorite: false},
{name: 'machop', url: 'https://pokeapi.co/api/v2/pokemon/66/', isFavorite: false},
{name: 'machoke', url: 'https://pokeapi.co/api/v2/pokemon/67/', isFavorite: false},
{name: 'machamp', url: 'https://pokeapi.co/api/v2/pokemon/68/', isFavorite: false},
{name: 'bellsprout', url: 'https://pokeapi.co/api/v2/pokemon/69/', isFavorite: false},
{name: 'weepinbell', url: 'https://pokeapi.co/api/v2/pokemon/70/', isFavorite: false},
{name: 'victreebel', url: 'https://pokeapi.co/api/v2/pokemon/71/', isFavorite: false},
{name: 'tentacool', url: 'https://pokeapi.co/api/v2/pokemon/72/', isFavorite: false},
{name: 'tentacruel', url: 'https://pokeapi.co/api/v2/pokemon/73/', isFavorite: false},
{name: 'geodude', url: 'https://pokeapi.co/api/v2/pokemon/74/', isFavorite: false},
{name: 'graveler', url: 'https://pokeapi.co/api/v2/pokemon/75/', isFavorite: false},
{name: 'golem', url: 'https://pokeapi.co/api/v2/pokemon/76/', isFavorite: false},
{name: 'ponyta', url: 'https://pokeapi.co/api/v2/pokemon/77/', isFavorite: false},
{name: 'rapidash', url: 'https://pokeapi.co/api/v2/pokemon/78/', isFavorite: false},
{name: 'slowpoke', url: 'https://pokeapi.co/api/v2/pokemon/79/', isFavorite: false},
{name: 'slowbro', url: 'https://pokeapi.co/api/v2/pokemon/80/', isFavorite: false},
{name: 'magnemite', url: 'https://pokeapi.co/api/v2/pokemon/81/', isFavorite: false},
{name: 'magneton', url: 'https://pokeapi.co/api/v2/pokemon/82/', isFavorite: false},
{name: 'farfetchd', url: 'https://pokeapi.co/api/v2/pokemon/83/', isFavorite: false},
{name: 'doduo', url: 'https://pokeapi.co/api/v2/pokemon/84/', isFavorite: false},
{name: 'dodrio', url: 'https://pokeapi.co/api/v2/pokemon/85/', isFavorite: false},
{name: 'seel', url: 'https://pokeapi.co/api/v2/pokemon/86/', isFavorite: false},
{name: 'dewgong', url: 'https://pokeapi.co/api/v2/pokemon/87/', isFavorite: false},
{name: 'grimer', url: 'https://pokeapi.co/api/v2/pokemon/88/', isFavorite: false},
{name: 'muk', url: 'https://pokeapi.co/api/v2/pokemon/89/', isFavorite: false},
{name: 'shellder', url: 'https://pokeapi.co/api/v2/pokemon/90/', isFavorite: false},
{name: 'cloyster', url: 'https://pokeapi.co/api/v2/pokemon/91/', isFavorite: false},
{name: 'gastly', url: 'https://pokeapi.co/api/v2/pokemon/92/', isFavorite: false},
{name: 'haunter', url: 'https://pokeapi.co/api/v2/pokemon/93/', isFavorite: false},
{name: 'gengar', url: 'https://pokeapi.co/api/v2/pokemon/94/', isFavorite: false},
{name: 'onix', url: 'https://pokeapi.co/api/v2/pokemon/95/', isFavorite: false},
{name: 'drowzee', url: 'https://pokeapi.co/api/v2/pokemon/96/', isFavorite: false},
{name: 'hypno', url: 'https://pokeapi.co/api/v2/pokemon/97/', isFavorite: false},
{name: 'krabby', url: 'https://pokeapi.co/api/v2/pokemon/98/', isFavorite: false},
{name: 'kingler', url: 'https://pokeapi.co/api/v2/pokemon/99/', isFavorite: false},
{name: 'voltorb', url: 'https://pokeapi.co/api/v2/pokemon/100/', isFavorite: false},
];

export default dataMock;