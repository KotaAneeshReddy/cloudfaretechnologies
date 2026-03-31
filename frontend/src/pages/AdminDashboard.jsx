import React, { useState, useEffect } from 'react';
import { 
  getCourses, createCourse, updateCourse, deleteCourse,
  getJobs, createJob, updateJob, deleteJob,
  getInternships, createInternship, updateInternship, deleteInternship,
  getApplications, deleteApplication,
  getEnrollments, deleteEnrollment
} from '../api';
import { 
  Plus, Edit, Trash2, Search, Filter, 
  BookOpen, Briefcase, GraduationCap, Users, UserCheck, 
  LogOut, ChevronRight, X, Save
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const tabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'internships', label: 'Internships', icon: GraduationCap },
    { id: 'applications', label: 'Applications', icon: Users },
    { id: 'enrollments', label: 'Enrollments', icon: UserCheck },
  ];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let res;
      switch (activeTab) {
        case 'courses': res = await getCourses(); break;
        case 'jobs': res = await getJobs(); break;
        case 'internships': res = await getInternships(); break;
        case 'applications': res = await getApplications(); break;
        case 'enrollments': res = await getEnrollments(); break;
        default: break;
      }
      setData(res.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/admin/login';
  };

  const handleCreate = () => {
    setEditingItem(null);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      switch (activeTab) {
        case 'courses': await deleteCourse(id); break;
        case 'jobs': await deleteJob(id); break;
        case 'internships': await deleteInternship(id); break;
        case 'applications': await deleteApplication(id); break;
        case 'enrollments': await deleteEnrollment(id); break;
      }
      fetchData();
    } catch (err) {
      alert('Error deleting item');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        switch (activeTab) {
          case 'courses': await updateCourse(editingItem.id, formData); break;
          case 'jobs': await updateJob(editingItem.id, formData); break;
          case 'internships': await updateInternship(editingItem.id, formData); break;
        }
      } else {
        switch (activeTab) {
          case 'courses': await createCourse(formData); break;
          case 'jobs': await createJob(formData); break;
          case 'internships': await createInternship(formData); break;
        }
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      alert('Error saving item');
    }
  };

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getTableHeaders = () => {
    switch (activeTab) {
      case 'courses': return ['Title', 'Duration', 'Instructor'];
      case 'jobs': return ['Title', 'Company', 'Location', 'Type'];
      case 'internships': return ['Title', 'Duration', 'Location'];
      case 'applications': return ['Name', 'Email', 'Job/Internship', 'Applied At'];
      case 'enrollments': return ['Name', 'Email', 'Program', 'Date'];
      default: return [];
    }
  };

  const renderRow = (item) => {
    switch (activeTab) {
      case 'courses':
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.duration}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.instructor}</td>
          </>
        );
      case 'jobs':
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.company}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
          </>
        );
      case 'internships':
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.duration}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
          </>
        );
      case 'applications':
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.job ? `Job: ${item.job.title}` : `Intern: ${item.internship ? item.internship.title : 'N/A'}`}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(item.appliedAt).toLocaleDateString()}
            </td>
          </>
        );
      case 'enrollments':
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.courseName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(item.enrollmentDate).toLocaleDateString()}
            </td>
          </>
        );
    }
  };

  const renderFormFields = () => {
    const commonClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border";
    
    switch (activeTab) {
      case 'courses':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className={commonClasses} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Instructor</label>
              <input type="text" value={formData.instructor || ''} onChange={e => setFormData({...formData, instructor: e.target.value})} className={commonClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input type="text" value={formData.duration || ''} onChange={e => setFormData({...formData, duration: e.target.value})} className={commonClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className={commonClasses} rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Syllabus (JSON string)</label>
              <textarea value={formData.syllabus || ''} onChange={e => setFormData({...formData, syllabus: e.target.value})} className={commonClasses} rows={3} placeholder='{"modules": [...]}' />
            </div>
          </div>
        );
      case 'jobs':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className={commonClasses} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input type="text" value={formData.company || ''} onChange={e => setFormData({...formData, company: e.target.value})} className={commonClasses} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" value={formData.location || ''} onChange={e => setFormData({...formData, location: e.target.value})} className={commonClasses} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select value={formData.type || ''} onChange={e => setFormData({...formData, type: e.target.value})} className={commonClasses}>
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className={commonClasses} rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Requirements</label>
              <textarea value={formData.requirements || ''} onChange={e => setFormData({...formData, requirements: e.target.value})} className={commonClasses} rows={2} />
            </div>
          </div>
        );
      case 'internships':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className={commonClasses} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input type="text" value={formData.duration || ''} onChange={e => setFormData({...formData, duration: e.target.value})} className={commonClasses} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" value={formData.location || ''} onChange={e => setFormData({...formData, location: e.target.value})} className={commonClasses} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className={commonClasses} rows={3} />
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-lg z-10">
        <div className="p-6">
          <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
        </div>
        <nav className="mt-4 px-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {tab.label}
              </button>
            );
          })}
          <div className="pt-10">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 capitalize leading-tight">
                Manage {activeTab}
              </h2>
              <p className="text-gray-500">Add, edit, or remove {activeTab} stored in the database.</p>
            </div>
            {['courses', 'jobs', 'internships'].includes(activeTab) && (
              <button 
                onClick={handleCreate}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New
              </button>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {getTableHeaders().map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={getTableHeaders().length + 1} className="px-6 py-20 text-center text-gray-500">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        Loading data...
                      </td>
                    </tr>
                  ) : filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={getTableHeaders().length + 1} className="px-6 py-20 text-center text-gray-500">
                        No records found.
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        {renderRow(item)}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            {['courses', 'jobs', 'internships'].includes(activeTab) && (
                              <button onClick={() => handleEdit(item)} className="p-1 text-blue-600 hover:bg-blue-50 rounded transition">
                                <Edit className="w-5 h-5" />
                              </button>
                            )}
                            <button onClick={() => handleDelete(item.id)} className="p-1 text-red-600 hover:bg-red-50 rounded transition">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Create/Edit */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-50"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 z-50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {editingItem ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}
                  </h3>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderFormFields()}
                  <div className="flex justify-end gap-4 pt-4">
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
                    >
                      <Save className="w-5 h-5 mr-2" />
                      {editingItem ? 'Update' : 'Create'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
