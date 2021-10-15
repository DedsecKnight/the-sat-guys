const RecentExam = () => {
    return (
        <div className="border-2 border-gray-100 rounded-xl p-7 my-5 flex flex-col justify-between">
            <div className="flex flex-row justify-between">
                <h1 className="text-lg font-medium">Recent Exam</h1>
                <h1 className="text-lg">Click to view all recent exams</h1>
            </div>
            <table className="table-fixed mt-5">
                <thead className="border-3 border-bottom border-gray-100">
                    <tr>
                        <th>Exam ID</th>
                        <th>Category</th>
                        <th>Time Taken</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">x1234sd</td>
                        <td className="text-center">Math (no calculator)</td>
                        <td className="text-center">00:30::23</td>
                        <td className="text-center">90%</td>
                    </tr>
                    <tr>
                        <td className="text-center">x1234sd</td>
                        <td className="text-center">Math (no calculator)</td>
                        <td className="text-center">00:30::23</td>
                        <td className="text-center">90%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecentExam;
