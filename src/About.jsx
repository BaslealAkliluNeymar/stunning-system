import { Theme } from "./Context"
import { useContext ,useReducer } from "react"

const initialState = {
  url:'./assets/ali.jpg',
  text:''
}
const reducer = (state,action) => {
  switch(action) {
    case 'Koby':
      return {
        url:'./assets/koby.jpg',
        text:'Kobe Bean Bryant (/ˈkoʊbi/ KOH-bee; August 23, 1978 – January 26, 2020) was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA). Widely regarded as one of the greatest basketball players of all time, Bryant won five NBA championships, was an 18-time All-Star, a 15-time member of the All-NBA Team, a 12-time member of the All-Defensive Team, the 2008 NBA Most Valuable Player (MVP), and a two-time NBA Finals MVP. Bryant also led the NBA in scoring twice, and ranks fourth in league all-time regular season and postseason scoring. He was posthumously voted into the Naismith Memorial Basketball Hall of Fame in 2020 and named to the NBA 75th Anniversary Team in 2021.The son of former NBA player Joe Bryant, he was born in Philadelphia and partly raised in Italy. Recognized as the top American high-school basketball player while at Philadelphia suburb Lower Merion, Bryant declared for the 1996 NBA draft and was selected by the Charlotte Hornets with the 13th overall pick; he was then traded to the Lakers. As a rookie, Bryant earned a reputation as a high-flyer by winning the 1997 Slam Dunk Contest and was named an All-Star by his second season. Despite a feud with teammate Shaquille ONeal, the pair led the Lakers to three consecutive NBA championships from 2000 to 2002.'
      }
    case 'Mike':
      return {
        url:'./assets/mike.jpg',
        text:'Michael Gerard Tyson (born June 30, 1966) is an American former professional boxer who competed from 1985 to 2005. Nicknamed "Iron Mike"[4] and "Kid Dynamite" in his early career, and later known as "the Baddest Man on the Planet",[5] Tyson is regarded as one of the greatest heavyweight boxers of all time.[6] He reigned as the undisputed world heavyweight champion from 1987 to 1990. Tyson won his first 19 professional fights by knockout, 12 of them in the first round. Claiming his first belt at 20 years, four months, and 22 days old, Tyson holds the record as the youngest boxer ever to win a heavyweight title.[7] He was the first heavyweight boxer to simultaneously hold the WBA, WBC and IBF titles, as well as the only heavyweight to unify them in succession. The following year, Tyson became the lineal champion when he knocked out Michael Spinks in 91 seconds of the first round.[8] In 1990, Tyson was knocked out by underdog Buster Douglas[9] in one of the biggest upsets in boxing history.In 1992, Tyson was convicted of rape and sentenced to six years in prison, although he was released on parole after three years.[10][11][12] After his release in 1995, he engaged in a series of comeback fights, regaining the WBA and WBC titles in 1996 to join Floyd Patterson, Muhammad Ali, Tim Witherspoon, Evander Holyfield and George Foreman as the only men in boxing history to have regained a heavyweight championship after losing it. After being stripped of the WBC title in the same year, Tyson lost the WBA title to Evander Holyfield by an eleventh round stoppage. Their 1997 rematch ended when Tyson was disqualified for biting Holyfields ears, one bite notoriously being strong enough to remove a portion of his right ear. In 2002, Tyson fought for the world heavyweight title, losing by knockout to Lennox Lewis.Tyson was known for his ferocious and intimidating boxing style as well as his controversial behavior inside and outside the ring. With a knockout-to-win percentage of 88%,[13] he was ranked 16th on The Ring magazines list of 100 greatest punchers of all time,[14] and first on ESPNs list of "The Hardest Hitters in Heavyweight History".[15] Sky Sports described him as "perhaps the most ferocious fighter to step into a professional ring".[16] He has been inducted into the International Boxing Hall of Fame and the World Boxing Hall of Fame.'
      }
    case 'Peterson':
      return {
        url:'./assets/peterson.jpg',
        text:`Jordan Bernt Peterson (born 12 June 1962) is a Canadian psychologist, author, and media commentator.[4][5] He began to receive widespread attention in the late 2010s for his views on cultural and political issues, often described as conservative.[6][7][8][9] Peterson has described himself as a classic British liberal[10][11][12] and a traditionalist.[13]Born and raised in Alberta, Peterson obtained bachelor's degrees in political science and psychology from the University of Alberta and a Ph.D. in clinical psychology from McGill University. After researching and teaching at Harvard University, he returned to Canada in 1998 and became a professor of psychology at the University of Toronto. In 1999, he published his first book, Maps of Meaning: The Architecture of Belief, which became the basis for many of his subsequent lectures. The book combined psychology, mythology, religion, literature, philosophy and neuroscience to analyze systems of belief and meaning.
        In 2016, Peterson released a series of YouTube videos criticizing the Act to amend the Canadian Human Rights Act and the Criminal Code (Bill C-16), passed by the Parliament of Canada to introduce "gender identity and expression" as prohibited grounds for discrimination.[b] Peterson claimed that the bill could make it a crime to fail to use certain genderless pronouns upon request, and related this argument to a general critique of political correctness and identity politics. He received significant media coverage, attracting both support and criticism.
        In 2018, he paused both his clinical practice and teaching duties and published his second book: 12 Rules for Life: An Antidote to Chaos, a self-help book. Promoted with a world tour, it became a bestseller in several countries. Throughout 2019 and 2020, Peterson suffered health problems in the aftermath of severe benzodiazepine withdrawal syndrome. In 2021, he published his third book, Beyond Order: 12 More Rules for Life, resigned from the University of Toronto, and returned to podcasting. In 2022, Peterson signed a content distribution deal with the conservative media company The Daily Wire and became Chancellor of Ralston College. His various lectures and conversations, available mainly on YouTube and podcasts, have gathered millions of views.`
      }
    case 'Ali':
      return {
        url:'./assets/ali.jpg',
        text:`Muhammad Ali (/ɑːˈliː/;[2] born Cassius Marcellus Clay Jr.; January 17, 1942 – June 3, 2016) was an American professional boxer and activist. Nicknamed "the Greatest", he is regarded as one of the most significant sports figures of the 20th century and is often regarded as the greatest heavyweight boxer of all time. He held the Ring magazine heavyweight title from 1964 to 1970. He was the undisputed champion from 1974 to 1978 and the WBA and Ring heavyweight champion from 1978 to 1979. In 1999, he was named Sportsman of the Century by Sports Illustrated and the Sports Personality of the Century by the BBC.Born and raised in Louisville, Kentucky, he began training as an amateur boxer at age 12. At 18, he won a gold medal in the light heavyweight division at the 1960 Summer Olympics and turned professional later that year. He converted to Islam after 1961. He won the world heavyweight championship, defeating Sonny Liston in a major upset on February 25, 1964, at age 22. During that year, he denounced his birth name as a "slave name" and formally changed his name to Muhammad Ali. In 1966, Ali refused to be drafted into the military owing to his religious beliefs and ethical opposition to the Vietnam War and was found guilty of draft evasion and stripped of his boxing titles. He stayed out of prison while appealing the decision to the Supreme Court, where his conviction was overturned in 1971. He did not fight for nearly four years and lost a period of peak performance as an athlete. Ali's actions as a conscientious objector to the Vietnam War made him an icon for the larger counterculture of the 1960s generation, and he was a very high-profile figure of racial pride for African Americans during the civil rights movement and throughout his career. As a Muslim, Ali was initially affiliated with Elijah Muhammad's Nation of Islam (NOI). He later disavowed the NOI, adhering to Sunni Islam.`
      }
    case 'Ronaldo':
    return {
      url:'./assets/ronaldo.jpg',
      text:`Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaldu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards,[note 3] a record three UEFA Best Player in Europe, and four European Golden Shoes, the most by a European player. He has won 33 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League. Ronaldo holds the records for most appearances (183), goals (140) and assists (42) in the Champions League, goals in the European Championship (14), international goals (123) and international appearances (200). He is one of the few players to have made over 1,100 professional career appearances, and has scored over 800 official senior career goals for club and country, making him the highest goalscorer of all time.Ronaldo began his senior career with Sporting CP, before signing with Manchester United in 2003, winning the FA Cup in his first season. He would also go on to win three consecutive Premier League titles, the Champions League and the FIFA Club World Cup; at age 23, he won his first Ballon d'Or. Ronaldo was the subject of the then-most expensive association football transfer when he signed for Real Madrid in 2009 in a transfer worth €94 million (£80 million). He became a key contributor and formed an attacking trio with Karim Benzema and Gareth Bale which was integral to the team winning four Champions League wins from 2014 to 2018, including La Décima.`
    }
    case 'Tate':
    return {
      url:'./assets/tate.jpg',
      text:`Emory Andrew Tate III (born 1 December 1986) is an American-British media personality, businessman, and former professional kickboxer.Tate began practising kickboxing in 2005 and gained his first championship in 2009. He attracted wider attention in 2016 when he appeared on the British reality show Big Brother. He was removed from the show after a video emerged of Tate repeatedly striking a woman with a belt; the two later stated the act was consensual. He began offering paid courses[when?] and memberships through his website and rose to fame as an internet celebrity, promoting an "ultra-masculine, ultra-luxurious lifestyle". Tate's misogynistic commentary has resulted in his suspension from various social media platforms.[4][5][6][7]
      In December 2022, Tate and his brother Tristan were arrested in Romania along with two women; all four are suspected of human trafficking and forming an organised crime group. Romanian police alleged that the group coerced victims into creating paid pornography.[8] In March 2023, all four were moved to house arrest while the investigation continued, after being held in custody since their arrest.[9][10] In June, they were charged with rape, human trafficking, and forming an organised crime group to sexually exploit women. Tate and his brother deny all charges.[11]
      Early life Emory Andrew Tate III was born on 1 December 1986,[12][4][13] in Walter Reed Army Medical Center in Washington, D.C.[14] He is mixed-race.[15] His African American father Emory Tate (1958–2015) was a chess international master[16] and his English mother worked as a catering assistant.[17] He has a younger brother, Tristan. He was raised in Chicago, Illinois and Goshen, Indiana. After his parents divorced, his mother took both brothers to England.[18] Tate was raised in the Christian faith.[19]`
    }
    default :
        return {
          url:'./assets/ali.jpg',
          text:`Muhammad Ali (/ɑːˈliː/;[2] born Cassius Marcellus Clay Jr.; January 17, 1942 – June 3, 2016) was an American professional boxer and activist. Nicknamed "the Greatest", he is regarded as one of the most significant sports figures of the 20th century and is often regarded as the greatest heavyweight boxer of all time. He held the Ring magazine heavyweight title from 1964 to 1970. He was the undisputed champion from 1974 to 1978 and the WBA and Ring heavyweight champion from 1978 to 1979. In 1999, he was named Sportsman of the Century by Sports Illustrated and the Sports Personality of the Century by the BBC.
          Born and raised in Louisville, Kentucky, he began training as an amateur boxer at age 12. At 18, he won a gold medal in the light heavyweight division at the 1960 Summer Olympics and turned professional later that year. He converted to Islam after 1961. He won the world heavyweight championship, defeating Sonny Liston in a major upset on February 25, 1964, at age 22. During that year, he denounced his birth name as a "slave name" and formally changed his name to Muhammad Ali. In 1966, Ali refused to be drafted into the military owing to his religious beliefs and ethical opposition to the Vietnam War and was found guilty of draft evasion and stripped of his boxing titles. He stayed out of prison while appealing the decision to the Supreme Court, where his conviction was overturned in 1971. He did not fight for nearly four years and lost a period of peak performance as an athlete. Ali's actions as a conscientious objector to the Vietnam War made him an icon for the larger counterculture of the 1960s generation, and he was a very high-profile figure of racial pride for African Americans during the civil rights movement and throughout his career. As a Muslim, Ali was initially affiliated with Elijah Muhammad's Nation of Islam (NOI). He later disavowed the NOI, adhering to Sunni Islam.`
        }
  }
}
const About = () => {
  const {theme} = useContext(Theme)
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.url)
  return (
    <section style={
          {
            backgroundColor: theme === 'light' ? 'white': '#141414',
            color: theme === 'light'? '#141414': 'white'
            }} className="w-full  mt-[92px]">
            <div className="w-[80%] m-auto h-[100vh] p-5 flex">
              <div >
                <ul className="w-[315px] h-screen flex flex-col justify-evenly items-center">
                  <li onClick={() => dispatch('Koby')}  className={`cursor-pointer ${theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}`}>Koby Bryant</li>
                  <li onClick={() => dispatch('Ali')} className={`cursor-pointer ${theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}`}>Mohammed Ali</li>
                  <li onClick={() => dispatch('Mike')} className={`cursor-pointer ${theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}`}>Mike Tyson</li>
                  <li onClick={() => dispatch('Tate')} className={`cursor-pointer ${theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}`}>Andrew Tate</li>
                  <li onClick={() => dispatch('Peterson')} className={`cursor-pointer ${theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}`}>Jordan Peterson</li>
                  <li onClick={() => dispatch('Ronaldo')} className={`cursor-pointer ${theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}`}>Christiano Ronaldo</li>
                </ul>
              </div>
              <div className="h-screen flex flex-col gap-2 items-center">
                <img src={state.url} alt="" className="m-auto" />
                <p>{state.text}</p>
              </div>
            </div>
    </section>
  )
}

export default About