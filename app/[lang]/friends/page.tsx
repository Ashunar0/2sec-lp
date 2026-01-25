import { getDictionary } from '@/lib/get-dictionary';
import FriendsPage from '@/components/FriendsPage';

export const dynamic = 'force-static';
export const revalidate = false;

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function Page({ params }: Props) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <FriendsPage dict={dict.friends} />;
}
