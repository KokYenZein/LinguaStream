import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import "./DemoPage.css";
import DemoPageInputs from "../components/DemoPageInputs";
import DemoPageVideo from "../components/DemoPageVideo";
import cross from "../assets/cross.png";

export default function DemoPage(){
    let navigate = useNavigate();
    const [language, setLanguage] = useState(null);
    const [celebrityVoice, setCelebrityVoice] = useState(null);
    const [videoDetails, setVideoDetails] = useState(false);
    const [showError, setShow] = useState(false);
    const [lang, setLang] = useState("");
    const [link, setLink] = useState("");
    const [transc, setTransc] = useState("");

    function moveToVideo(){
        if (language===null || language==="SL"){
            setShow(true);
        }else{
            setVideoDetails(true);
            if (language === "E"){
                setLang("English")
                if (celebrityVoice==="BO"){
                    setLink("https://storage.googleapis.com/linguastream-trial.appspot.com/obama_dijkstra");
                }else if(celebrityVoice==="GR"){
                    setLink("https://storage.googleapis.com/linguastream-trial.appspot.com/gordon_dijkstra");
                }else{
                    setLink("https://storage.googleapis.com/linguastream-trial.appspot.com/english_dijkstra");
                }
                setTransc("Today, I will teach you how to run Dijkstra's algorithm on a weighted directed graph. Dijkstra's algorithm tells you the shortest distance from a node to every other node in the graph. This is different from Prim's and Kruskal's algorithms, which result in minimum spanning trees. Let's use the following graph for our example. We will keep a list with the unvisited nodes at the bottom. Our first step is to choose the starting node. Let's choose A. We will use the table on the right to keep track of the distances. Remember, the distances we measure from our starting node, and we put 0 for A and infinity for the others because we haven't visited them yet. The next step is to inspect the edges leaving A. We can access B and C from A. So, let's update the graph with the corresponding costs. Next, we look at the graph and choose the smallest edge from which the vertex is not chosen. In this case, it is C. Let's cut it and see in the list the invisible node you mark as closed after choosing C. We examine the edges leaving B and update the class accordingly. B has become accessible from A at a cost of three by going through C. D and E also become reachable for the first time. Let us do the same as before by choosing the smallest path with a node unclosed. This time it is B. We repeat the process of checking the edges leaving B and updating the access cost to D and E. Now, we choose D. This time there are no updates on our table as there are no edges leaving D. Finally, we choose E again. No updates, but this time because the edge left E does not result in a shortest path, all edges in the graph have now been visited and are closed. Here is the shortest path from A to the other nodes. The time complexity of Dijkstra's is Big O of E + V log V if a Fibonacci heap is used. This is a result of creating a queue of distance and iteration values across the edges of each node. Here is the pseudocode of Dijkstra's algorithm. For more information, please visit the source given below in the description. That's all. I hope this video has given you a good understanding of Dijkstra's algorithm.");
            }else if(language === "C"){
                setLang("Chinese");
                setLink("https://storage.googleapis.com/linguastream-trial.appspot.com/chinese_dijkstra");
                setTransc("今天我将教你如何在加权有向图上运行 Dijkstra 算法。Dijkstra 算法告诉您图中从一个节点到每个其他节点的最短距离，并且该距离会有所不同。对于产生最小生成树的 prims 和 kruskal，我们使用下图。对于我们的示例，我们将在底部保留未访问节点的列表，我们的第一步是选择作为起始节点，我们选择右侧的表来跟踪距离，记住我们从起始节点测量的距离，我们将 a 设置为 0 并设置为无穷大对于其他人，因为我们还没有访问过，下一步是检查边缘并离开 a。我们可以从 a 访问 B 和 C，所以接下来我们用相应的成本更新图表。到图中，我们选择最小的边，在本例中未选择顶点 C。让我们剪切它，看看在选择 C ​​后标记为关闭的不可见节点列表中，我们检查边缘离开板凳，我们相应地更新类，现在可以从 a 访问艺术 B。当 D 和 E 第一次变得可到达时，以 3 的代价穿过 Z，让我们这样做。与之前相同，这次选择非闭合节点的最小路径为 B。我们重复检查离开 B 的边并更新到达 D 和 E 的成本的过程。现在我们选择 D。这次我们的表上没有更新，因为没有边离开 D。最后我们再次选择 No update，但这一次因为 Edge Leave II no 导致路径较短，图中的所有边现在都已被访问并关闭。这是从 A 到其他节点的最短路径，其中如果仅使用斐波那契堆，则 Dyke 性能的时间复杂度为 Big O of e + V log B。这是创建跨每个节点边缘的距离和迭代值队列的结果。这是 Dijkstra 算法的伪代码。如需了解更多信息，请访问下面描述中显示的源代码，仅此而已。我希望这个视频能让您更好地理解 Dijkstra 算法。")
            }else{
                setLang("French");
                setLink("https://storage.googleapis.com/linguastream-trial.appspot.com/french_dijkstra");
                setTransc("Aujourd'hui, je vais vous apprendre à exécuter l'algorithme de Dijkstra sur un graphe orienté pondéré. L'algorithme de Dijkstra vous indique la distance la plus courte entre un nœud et chaque autre nœud du graphe. Cela varie pour les prims et kruskal qui aboutissent à des arbres couvrant minimum. Utilisons le graphique suivant pour notre exemple. Nous conserverons une liste de nœuds non visités en bas. Notre première étape consiste à sélectionner un nœud de départ. Choisissons A. Nous utilisons un tableau de droite pour suivre les distances, en nous souvenant que nous mesurons les distances à partir de notre nœud de départ. Nous définissons 0 pour A et l'infini pour les autres parce que nous n'y sommes pas encore allés. La prochaine étape est d'inspecter les bords et de repartir de A. Nous pouvons accéder à B et C à partir de A, mettons donc à jour le graphe avec les coûts correspondants. Puis, regardons au graphe et on sélectionne la plus petite arête dont le sommet n'est pas sélectionné. Dans ce cas, c'est C. Coupons-le et voyons dans la liste des nœuds invisibles que vous marquez comme fermés après avoir sélectionné C. Nous examinons les bords qui quittent C et nous mettons à jour la classe en conséquence. L'arête B est désormais accessible depuis A au prix de trois en passant par C, alors que D et E deviennent accessibles pour la première fois. Faisons comme avant de choisir le plus petit chemin avec nœud non fermé. Cette fois-ci, c'est B. Nous répétons le processus d'examen des arêtes quittant B et de mise à jour du coût pour atteindre D et E. Maintenant, nous choisissons D. Cette fois, il n'y a pas de mises à jour sur notre table car il n'y a aucune arête quittant D. Finalement, on choisit E. Pas de mises à jour mais cette fois car l'arête qui quitte E n'entraîne pas un chemin plus court. Toutes les arêtes du graphe ont maintenant été visitées et fermées. Voici le chemin le plus court de A vers les autres nœuds. La complexité temporelle des performances de Dijkstra est Big O de E + V log V si un tas de Fibonacci est simplement utilisé. Ceci est le résultat de la création d'une file d'attente de valeurs de distance et d'itération sur les bords de chaque nœud. Voici le pseudo-code de l'algorithme de Dijkstra. Pour plus d'informations, veuillez visiter la source indiquée ci-dessous dans la description. Et c'est tout. J'espère que cette vidéo vous a permis de bien comprendre l'algorithme de Dijkstra.")
            }
        }
        setShow(false);
    }
    return(
        <div className="demoroot">
            <header>
            <h1 className="lp-title"><Link to="/">linguastream</Link></h1>
            
            <div className="lp-header-buttons">
            <Button
            backgroundColor={"#1A4D2E"}
            color={"white"}
            _hover={{backgroundColor: "white", color: "#1A4D2E"}}
            borderRadius={"1em"}
            marginInlineEnd={"1em"}
            width={"7em"}
                onClick={() => navigate("/login")}
            >
                <Text>Login</Text>
            </Button>
            <Button
            borderRadius={"1em"}
            color={"#1A4D2E"}
            width={"7em"}
                onClick={() => navigate("/signup")}
            >
                <Text>Sign up</Text>
            </Button>
            </div>
            </header>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            {showError && !videoDetails ? (
                <div className="error-holder">
                    <p>Please select a language to continue</p>
                    <img onClick={()=>{setShow(false)}} src={cross} alt=""/>
                </div>) : (<></>)}
            </div>
            {videoDetails ? (
              <DemoPageVideo
                lang={lang}
                transc={transc}
                link={link}
                notback={setVideoDetails}
              />
            ):(
            <DemoPageInputs
                language={language}
                setLanguage={setLanguage}
                celebrityVoice={celebrityVoice}
                setCelebrityVoice={setCelebrityVoice}
                moveToVideo={moveToVideo}
              />
            )}
        </div>
    )
}