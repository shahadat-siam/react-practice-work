import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const students = [
        {"id": 1, "name": "Alice", "physics_mark": 82, "chemistry_mark": 78, "math_mark": 75},
        {"id": 2, "name": "Bob", "physics_mark": 75, "chemistry_mark": 80, "math_mark": 82},
        {"id": 3, "name": "Charlie", "physics_mark": 70, "chemistry_mark": 72, "math_mark": 68},
        {"id": 4, "name": "David", "physics_mark": 88, "chemistry_mark": 85, "math_mark": 90},
        {"id": 5, "name": "Eve", "physics_mark": 79, "chemistry_mark": 70, "math_mark": 73},
        {"id": 6, "name": "Frank", "physics_mark": 85, "chemistry_mark": 88, "math_mark": 87},
        {"id": 7, "name": "Grace", "physics_mark": 77, "chemistry_mark": 81, "math_mark": 79},
        {"id": 8, "name": "Hannah", "physics_mark": 92, "chemistry_mark": 90, "math_mark": 95},
        {"id": 9, "name": "Isaac", "physics_mark": 69, "chemistry_mark": 68, "math_mark": 71},
        {"id": 10, "name": "Jane", "physics_mark": 83, "chemistry_mark": 79, "math_mark": 85}
      ]
    return (
        <div className='mx-10'>
            <LChart  width={800} height={400} data={students}>
            <XAxis dataKey="name"/>
            <YAxis/>
                <Line dataKey="math_mark"  stroke="#8884d8"></Line>
                <Line dataKey="chemistry_mark"  stroke="red"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;