import { useRouter } from "next/navigation";

export default function useRedirect() {
	const router = useRouter();
	const redirect = (path: string) => router.push(path);
	return redirect;
}
