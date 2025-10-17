import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/")
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(err => console.error("Erreur fetch:", err));
  }, []);

  return (
    <div className="home">
      <h1>{message}</h1>
      <p>TEST PAGE D'ACCUEIL 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc urna vestibulum justo, vel pharetra odio erat sit amet mauris. Proin ac enim sed nulla fermentum cursus. Mauris at libero nec purus luctus ultrices. Integer tincidunt, velit in bibendum tincidunt, libero magna consequat nunc, id pharetra magna eros nec lectus. Suspendisse potenti. Curabitur tempor, justo nec aliquet vestibulum, neque leo cursus nunc, vitae tincidunt nisl purus non purus.

Phasellus vitae elit ut tortor faucibus tincidunt. Quisque sagittis, mi a consequat gravida, odio nibh convallis libero, at tincidunt turpis nunc non sapien. Fusce at leo vel enim congue malesuada. Praesent sit amet velit ac nunc hendrerit porttitor. Sed elementum sapien nec ligula congue, a facilisis velit bibendum. Nam vitae orci sed est suscipit fermentum. Aenean et justo at est gravida bibendum.

Vivamus imperdiet, lorem a cursus vehicula, erat nisl iaculis metus, sed varius justo turpis non nisl. Nulla facilisi. Morbi auctor ligula ut purus cursus, non tincidunt erat laoreet. Donec a ex nec nisl convallis fringilla. Etiam dictum magna vitae neque tempor, at gravida sapien volutpat. Curabitur tristique, odio sed ultricies feugiat, sapien lorem congue justo, in sagittis ex sapien ac libero. Sed nec dolor ut sapien imperdiet pharetra.

Aliquam erat volutpat. Integer vel turpis in metus faucibus ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin non lorem id lectus tempus tincidunt. Donec consectetur, nisl et fermentum laoreet, neque purus porttitor turpis, ut malesuada elit nulla sit amet lorem. Ut sed velit nec urna fermentum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
  );
}