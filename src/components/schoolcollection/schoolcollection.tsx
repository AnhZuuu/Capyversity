import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaUniversity, FaMapMarkerAlt, FaGraduationCap, FaLanguage, FaDollarSign } from "react-icons/fa";

const SchoolCollection = () => {
  const initialSchools = [
    {
      id: 1,
      name: "International University of Excellence",
      address: "123 Education Avenue, Academic City",
      majorsCount: 45,
      ieltsPoint: 6.5,
      toeicPoint: 750,
      hskPoint: 5,
      tuitionAvg: 25000,
      tuitionMin: 20000,
      tuitionMax: 30000,
      image: "images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Global Studies Institute",
      address: "456 Scholar Street, Learning District",
      majorsCount: 38,
      ieltsPoint: 7.0,
      toeicPoint: 800,
      hskPoint: 4,
      tuitionAvg: 28000,
      tuitionMin: 22000,
      tuitionMax: 34000,
      image: "images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Tech & Arts Academy",
      address: "789 Innovation Road, Creative Zone",
      majorsCount: 52,
      ieltsPoint: 6.0,
      toeicPoint: 700,
      hskPoint: 6,
      tuitionAvg: 22000,
      tuitionMin: 18000,
      tuitionMax: 26000,
      image: "images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3"
    }
  ];

  const [schools, setSchools] = useState(initialSchools);
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    majorsCount: "",
    ieltsPoint: "",
    toeicPoint: "",
    hskPoint: "",
    tuitionAvg: "",
    tuitionMin: "",
    tuitionMax: ""
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filteredSchools = initialSchools.filter(school => {
      return (
        school.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        school.address.toLowerCase().includes(filters.address.toLowerCase()) &&
        (filters.majorsCount === "" || school.majorsCount >= parseInt(filters.majorsCount)) &&
        (filters.ieltsPoint === "" || school.ieltsPoint >= parseFloat(filters.ieltsPoint)) &&
        (filters.toeicPoint === "" || school.toeicPoint >= parseInt(filters.toeicPoint)) &&
        (filters.hskPoint === "" || school.hskPoint >= parseInt(filters.hskPoint)) &&
        (filters.tuitionMin === "" || school.tuitionMin >= parseInt(filters.tuitionMin)) &&
        (filters.tuitionMax === "" || school.tuitionMax <= parseInt(filters.tuitionMax))
      );
    });
    setSchools(filteredSchools);
  };

  const handleFilterChange = (e : any) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          {/* <h1 className="text-3xl font-bold text-gray-800">School Collection</h1> */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Toggle filters"
          >
            <FaFilter /> Filters
          </button>
        </div>

        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">School Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Filter by school name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={filters.address}
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Filter by address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="ieltsPoint" className="block text-sm font-medium text-gray-700">Minimum IELTS</label>
                <input
                  type="number"
                  id="ieltsPoint"
                  name="ieltsPoint"
                  value={filters.ieltsPoint}
                  onChange={handleFilterChange}
                  step="0.5"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Filter by IELTS score"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="toeicPoint" className="block text-sm font-medium text-gray-700">Minimum TOEIC</label>
                <input
                  type="number"
                  id="toeicPoint"
                  name="toeicPoint"
                  value={filters.toeicPoint}
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Filter by TOEIC score"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="hskPoint" className="block text-sm font-medium text-gray-700">Minimum HSK</label>
                <input
                  type="number"
                  id="hskPoint"
                  name="hskPoint"
                  value={filters.hskPoint}
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Filter by HSK level"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tuitionMin" className="block text-sm font-medium text-gray-700">Minimum Tuition</label>
                <input
                  type="number"
                  id="tuitionMin"
                  name="tuitionMin"
                  value={filters.tuitionMin}
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Filter by minimum tuition"
                />
              </div>
            </div>
          </div>
        )}

        {schools.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-600">No schools match your filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {schools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`https://${school.image}`}
                  alt={school.name}
                  className="w-full h-48 object-cover"

                />
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">{school.name}</h2>
                  <p className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt />
                    {school.address}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <FaGraduationCap className="text-blue-600" />
                      <span>{school.majorsCount} Majors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLanguage className="text-green-600" />
                      <span>IELTS: {school.ieltsPoint}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLanguage className="text-purple-600" />
                      <span>TOEIC: {school.toeicPoint}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLanguage className="text-red-600" />
                      <span>HSK: {school.hskPoint}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2">Tuition Range</h3>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <FaDollarSign className="text-yellow-600" />
                        {school.tuitionMin.toLocaleString()}
                      </span>
                      <span>-</span>
                      <span className="flex items-center gap-1">
                        <FaDollarSign className="text-yellow-600" />
                        {school.tuitionMax.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolCollection;
