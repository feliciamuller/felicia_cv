import './style.css';
import BackgroundChange from '../components/BackgroundChange';
export default function About(){
    return(
        <div className = "about-container">
            <article className = "about-content">
                <h2>Om mig</h2>
                    Kommer ursprungligen från Foppaland, eller Övik som dom flesta utanför Övik skulle säga. Jag har bott i Sundsvall ett par år och även en sväng i Fuengirola i Spaninen, men för 3 år sedan flyttade
                    jag till Hudik och det känns verkligen som hemma nu. Bor tillsammans med min sambo Filip i ett radhus på Öster, 
                    och trivs jättebra där. I september -23 påbörjade jag min utbildning till Systemutvecklare .NET och tycker det är så otroligt roligt! Jag har alltid haft ett intresse av problemlösning och under mina år på Telia
                    fick jag upp ögonen för programmering.<br></br><br></br>
                    När jag inte sitter och knackar kod tycker jag om att umgås med vänner och då spelar vi mycket brädspel. Gärna något strategiskt spel eller samarbetsspel. 
                    Mycket av min fritid spenderar jag också på padelhallen och gymmet, och på sommaren tränar jag på mitt golfspelande. Är nybörjare på golf så nöter fortfarande grunderna.
                    Jag har ett stort socialt behov och tycker om att vara tillsammans med andra människor, men jag värderar också min egentid otroligt mycket och tar vara på den.<br></br><br></br>
                    Detta återspeglas också i mitt arbetsliv då jag har bra samarbetsförmåga och jobbar väldigt bra i grupp, men samtidigt ett sjävledarskap som gör att jag
                    utför mina uppgifter självständigt och kan ta egna beslut. Genom mitt självledarskap tar jag även gärna initiativ och är inte rädd för nya utmaningar.
                    Jag har även en strukturerad sida där jag vill ha ordning och reda. Priolistor, checklistor, visuella processtavlor med mera är helt i min smak. 
            </article>
            <BackgroundChange/>
        </div>
    );
    
}
