import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'
import { Author } from '../types/Article'

interface AuthorCardProps {
    props: Author
}

const AuthorCard = ({ props }: AuthorCardProps) => {
    return (
        <li key={props.id} className="flex items-center gap-x-6">
            {props.attributes.avatar?.data?.attributes?.url ? (
                <img
                    src={`${props.attributes.avatar.data.attributes.url}`}
                    alt={props.attributes.name}
                    className="h-16 w-16 rounded-full"
                />
            ) : (
                <div className="h-16 w-16 rounded-full bg-gray-200"></div>
            )}
            <div>
                <h3 className="text-base font-semibold tracking-tight text-gray-900">
                    {props.attributes.name}
                </h3>
                <p className="text-sm font-semibold text-indigo-600">
                    {props.attributes.role}
                </p>
                <div className="mt-2 flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <IoLogoInstagram className="w-6 h-6 text-gray-600" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className="w-6 h-6 text-gray-600" />
                    </a>
                </div>
            </div>
        </li>
    );
}

export default AuthorCard