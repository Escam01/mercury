import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";



export default function ShortDisplayCard (props) {
    return (
      <Card
        hoverable
        style={{}}
        key={props.key}
        cover={<img alt={props.alt} src={props.src} />}
      >
        <Meta title={[props.title]} description={props.description} />
      </Card>
    );
  }; 
