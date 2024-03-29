import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import PropTypes from "prop-types";

const ReChart = ({book}) => {

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];


  const data = [
  {
    name: book.book_title,
    uv: book.number_of_pages,
    pv: 2400,
    amt: 2400,
  }
];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
        <BarChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        </div>
    );
};
ReChart.demoUrl = "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";

ReChart.propTypes = {
  book: PropTypes.object,
};

export default ReChart;